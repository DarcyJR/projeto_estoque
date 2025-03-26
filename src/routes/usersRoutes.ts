import { Router, Request, Response } from "express";
import { db } from "../firebase";

const usersRouter = Router();

async function testFirestore() {
    try {
      const testRef = db.collection("test").doc("testDoc");
      await testRef.set({ test: "ok" });
      console.log("Teste de escrita no Firestore bem-sucedido!");
    } catch (error) {
      console.error("Erro ao testar Firestore:", error);
    }
  }
  
  testFirestore();


usersRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const userRef = db.collection("users").doc();
        await userRef.set({ name, email });

        res.status(201).json({ message: "Usuário criado!", id: userRef.id });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
});

export default usersRouter;