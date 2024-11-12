import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/dbConnection.js';
const { JWT_SECRET, REFRESH_KEY } = process.env;

export const register = async (req, res) => {
    try {
        const userExistsQuery = 'SELECT * FROM doctors WHERE user_name = ?';
        db.query(userExistsQuery, [req.body.user_name.toLowerCase()], async (err, results) => {
            if (err) {
                return res.status(500).send({ msg: err.message });
            }
            if (results.length > 0) {
                return res.status(409).send({ msg: 'This user_name is already in use!' });
            }

            const hash = await bcrypt.hash(req.body.password, 10);

            const insertUserQuery = 'INSERT INTO doctors (user_name, password) VALUES (?, ?)';
            db.query(insertUserQuery, [req.body.user_name, hash], (err, result) => {
                if (err) {
                    return res.status(500).send({ msg: err.message });
                }
                res.status(201).send({
                    msg: 'User registered successfully!',
                    userId: result.insertId
                });
            });
        });
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

// Helper function to generate tokens
export const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '30s' });
};

export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, REFRESH_KEY, { expiresIn: '7d' });
};

export const login = async (req, res) => {
    try {
        const getUserQuery = 'SELECT * FROM doctors WHERE user_name = ?';
        db.query(getUserQuery, [req.body.user_name], async (err, results) => {
            if (err) {
                return res.status(500).send({ msg: err.message });
            }
            if (results.length === 0) {
                return res.status(401).send({ msg: 'Username incorrect!' });
            }

            const user = results[0];

            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if (!isValidPassword) {
                return res.status(401).send({ msg: 'Password incorrect!' });
            }

            const accessToken = generateAccessToken(user.id);
            const refreshToken = generateRefreshToken(user.id);

            // Store refreshToken in the database
            const updateTokenQuery = 'UPDATE doctors SET refresh_token = ? WHERE id = ?';
            db.query(updateTokenQuery, [refreshToken, user.id]);

            res.status(200).send({
                msg: 'Logged in successfully',
                accessToken,
                refreshToken,
                user: {
                    id: user.id,
                    user_name: user.user_name
                }
            });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ msg: err.message });
    }
};

export const refreshAccessToken = (req, res) => {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token required' });
    }

    jwt.verify(refreshToken, REFRESH_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired refresh token' });
        }

        // Check if refresh token exists in the database for the user
        const query = 'SELECT * FROM doctors WHERE id = ? AND refresh_token = ?';
        db.query(query, [decoded.id, refreshToken], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error' });
            }

            if (results.length === 0) {
                return res.status(403).json({ message: 'Invalid refresh token' });
            }

            // Generate a new access token
            const newAccessToken = generateAccessToken(decoded.id);
            res.status(200).json({ accessToken: newAccessToken });
        });
    });
};

export const logout = (req, res) => {
    const { userId } = req.body;

    const clearTokenQuery = 'UPDATE doctors SET refresh_token = NULL WHERE id = ?';
    db.query(clearTokenQuery, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};
