'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', userController.user_create_post);

router.put('/', (req, res) => {
    res.send('With this endpoint you can modify users.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete users.');
});

module.exports = router;


/*
catRouter.post('/user', (req, res) => {
    res.send('With this endpoint you can add users.');
});

catRouter.put('/user', (req,res) => {
    res.send('With this endpoint you can edit users.');
});

catRouter.delete('/user', (req,res) => {
    res.send('With this endpoint you can delete users.');
});*/

