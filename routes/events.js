const express=require('express');
const router=express.Router();
router.post('/create-event',eventCreate.add);

module.exports=router;

expor