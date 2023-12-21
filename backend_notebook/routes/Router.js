const express = require("express");
const {authController,authValidator} = require("../controlers/auth");
const {loginController,loginValidator} = require("../controlers/login");
const notesController = require("../controlers/notes");
const { body } = require('express-validator');
const {getUserControl} = require('../controlers/getUser')
const fetchuser = require('../middleware/fetchUser');
const { addNotes, addValidator } = require("../controlers/addNote");
const {deltenodeController} = require('../controlers/deleteNode')
const updateController = require('../controlers/updateNode')



const router = express.Router();

router.post('/auth/createUser',authValidator,authController)
router.post('/login/loginUser',loginValidator,loginController)
router.post('/getUser/getData',fetchuser,getUserControl)
router.get('/notes/fetchNotes',fetchuser,notesController)
router.post('/addNote/addnote',fetchuser,addValidator,addNotes)
router.delete('/deleteNode/delete/:id',fetchuser,deltenodeController)
router.put('/updateNode/update/:id',fetchuser,updateController)



module.exports=router;