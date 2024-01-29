import express from 'express'
import {  findUserbyid, getAllUsers, getMyDetails, login, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router()

// user routes
// end point to fetch the data of all the users from the database
router.get("/all", getAllUsers);
  
  // end point to register the data of the user into the database
  router.post("/new", register);
  router.get("/login", login);
  router.get("/logout", logout);
  router.get("/me", isAuthenticated,getMyDetails);
  
  // dynamic routing
  router.get('/userid/:id',findUserbyid)
export default router