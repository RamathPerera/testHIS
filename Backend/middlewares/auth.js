import jwt from 'jsonwebtoken';
import db from '../config/dbConnection.js';
const { JWT_SECRET } = process.env;

export const isAuthorize = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Authorization token missing or malformed',
            });
        }

        const token = authHeader.split(' ')[1];
        let decoded;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (err) {
            return res.status(401).json({
                message: 'Invalid or expired token',
            });
        }

        const query = 'SELECT * FROM doctors WHERE id = ?';
        db.query(query, [decoded.id], (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({
                    message: 'Internal server error',
                });
            }

            if (results.length === 0) {
                return res.status(404).json({
                    message: 'User not found',
                });
            }

            req.user = results[0];
            next();
        });

    } catch (error) {
        console.error("Authorization error:", error);
        return res.status(500).json({
            message: 'Server error',
        });
    }
};
