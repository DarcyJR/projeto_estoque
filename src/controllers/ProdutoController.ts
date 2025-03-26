import { Request, Response } from "express";
import { Produto, IProduto } from "../models/ProdutoModel";

export class ProductController {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await Produto.find();
      res.json(products);
      return;
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const product: IProduto = new Produto(req.body);
      await product.save();
      res.status(201).json(product);
      return
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product: Partial<IProduto> = req.body;
      const updateProduct = await Produto.findByIdAndUpdate(id, product, { new: true });
      if (!updateProduct) {
        res.status(400).json({ error: 'Produto não encontrado' });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const deleteProduct = await Produto.findByIdAndDelete(id);

      if (!deleteProduct) {
        res.status(400).json({ error: 'Produto não encontrado' });
        return;
      }

      res.status(200).json({ message: "Produtos deletados com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar produto" });
    }
  }
}
