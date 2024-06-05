/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for user authentication
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '500':
 *         description: Internal error
 *       '200':
 *         description: Successfully logged in
 *       '401':
 *         description: Invalid username or password
 *       '404':
 *         description: Email not found
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                type: string
 *               email:
 *                type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User successfully registered
 *       '500':
 *         description: internal error
 */

const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
} = require("../controllers/authControllers");

//Routes

router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;
