import express from "express";

const router = express.Router();

const users = [
   {
     "nom": "Joker",
     "prenom": "mariot",
     "age":23
   }
]
// Tous les routes ici commence par /users
router.get('/', (req,res)=>{
   res.send(users);
   res.send("Avy any antsiranana");
});

export default router;
