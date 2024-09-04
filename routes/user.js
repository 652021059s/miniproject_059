const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Adjust the path as per your project structure

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../Controller/userController');

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
