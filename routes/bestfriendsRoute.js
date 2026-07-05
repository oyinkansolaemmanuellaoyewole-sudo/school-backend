import express from 'express';
import { getBestfriends, createBestfriends, editBestfriends, deleteBestfriends } from '../controllers/bestfriendsController.js';

const router = express.Router();

router.get('/bestfriends', getBestfriends);
router.post('/create-bestfriends', createBestfriends);
router.put('/edit-bestfriends', editBestfriends);
router.delete('/delete-bestfriend', deleteBestfriends);


export default router;


