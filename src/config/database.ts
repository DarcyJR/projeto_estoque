import mongoose from "mongoose";

export class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      const mongoUri = '' as string;
      await mongoose.connect(mongoUri);
      console.log("✅ MongoDB conectado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao conectar no MongoDB:", error);
    }
  }
}
