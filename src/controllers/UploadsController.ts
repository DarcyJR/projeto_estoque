import multer from "multer";
import path from "path";
import { Request, Response } from "express"; // Import correto

// Configuração do multer para salvar as imagens na pasta "uploads/"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Middleware de upload de imagem
export const postImage = (req: Request, res: Response): void => {
    if (!req.file) { // Corrigido para verificar se não há arquivo
        res.status(400).json({ message: "Nenhuma imagem foi enviada." });
        return;
    }

    res.json({
        message: "Imagem enviada com sucesso!",
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`,
    });
};
