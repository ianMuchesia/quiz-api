import express from 'express'
import getQuiz from '../controllers/getQuiz.js';
import postQuiz from '../controllers/postQuiz.js';
const router = express .Router()



router.get("/",getQuiz) 
router.post("/", postQuiz)
export default router;