import db from '../config/dbConnection.js';

// Create a new user
export const createUser = async (req, res) => {
    const { name, position } = req.body;
    const query = 'INSERT INTO users (name, position, status) VALUES (?, ?, ?)';

    db.query(query, [name, position, "Enable"], (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err.message });
        }
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: { id: result.insertId, name, position, status: "Enable" }
        });
    });
};

// Get all users
export const getAllUsers = async (req, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: results
        });
    });
};

// Get a user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE userID = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.status(200).json({
            success: true,
            message: 'User retrieved successfully',
            data: results[0]
        });
    });
};

// Update a user by ID
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, position } = req.body;

    // First, fetch the current data for the user
    const selectQuery = 'SELECT * FROM users WHERE userID = ?';

    db.query(selectQuery, [id], (selectErr, selectResults) => {
        if (selectErr) {
            return res.status(500).json({ success: false, error: selectErr.message });
        }
        if (selectResults.length === 0) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Get current values from the database
        const currentUser = selectResults[0];

        // Use existing values if any field is missing in the request
        const updatedName = name || currentUser.name;
        const updatedPosition = position || currentUser.position;

        // Now, update the user record
        const updateQuery = 'UPDATE users SET name = ?, position = ? WHERE userID = ?';

        db.query(updateQuery, [updatedName, updatedPosition, id], (updateErr, updateResult) => {
            if (updateErr) {
                return res.status(400).json({ success: false, error: updateErr.message });
            }
            if (updateResult.affectedRows === 0) {
                return res.status(404).json({ success: false, error: 'User not found' });
            }

            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                data: { id, name: updatedName, position: updatedPosition }
            });
        });
    });
};

// Soft delete a user by ID (sets status to "no")
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE users SET status = ? WHERE userID = ?';

    db.query(query, ["Disable", id], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: { id }
        });
    });
};
