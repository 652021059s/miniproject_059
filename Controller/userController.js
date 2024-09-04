const User = require('../models/user');
const express = require('express');

// Get all students
exports.getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific student by ID
exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'user not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new student
exports.createUser = async (req, res) => {
    const { name, category, branch, workDays, gworkHours, leaveSick, leavePersonal,leaveRelax,leaveSpecial,workOutside,reportLate,totalWork,noTimeLoggedCount,daysWithoutTimeLog } = req.body;
    const user  = new User({name, category, branch, workDays, gworkHours, leaveSick, leavePersonal,leaveRelax,leaveSpecial,workOutside,reportLate,totalWork,noTimeLoggedCount,daysWithoutTimeLog });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a student by ID
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a student by ID
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
