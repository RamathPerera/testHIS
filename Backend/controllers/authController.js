import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/dbConnection.js';
const { JWT_SECRET } = process.env;

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

            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '3h' });

            res.status(200).send({
                msg: 'Logged in successfully',
                token,
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
