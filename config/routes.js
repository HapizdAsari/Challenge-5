const express = require('express');
const controllers = require('../app/controllers');
const { verifyToken } = require('../app/middleware/verifyToken');
const { authorize } = require('../app/middleware/authorize');
const router = express.Router();

const { carList, show, create, update, destroy } = controllers.api.v1.CarController;
const { userList, register, login, whoAmI } = controllers.api.v1.UserController;


router.post('/api/v1/register', register);
router.post('/api/v1/login', login);
router.get('/api/v1/users', userList)
router.get('/api/v1/user', verifyToken, whoAmI);
router.post('/api/v1/admin', authorize, register);


router.get('/api/v1/cars', authorize, carList);
router.get('/api/v1/cars/:id', authorize, show)
router.post('/api/v1/cars', authorize, create)
router.put('/api/v1/cars/:id', authorize, update)
router.delete('/api/v1/cars/:id', authorize, destroy)

module.exports = { router };