import { Request, Response } from "express";
import { Produto } from "../models/ProdutoModel";
import { error } from "console";

export const getProdutos = async (req: Request, res: Response) => {
    try {
        const produto = await Produto.find();
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos" });
    }
}

export const createProdutos = async (req: Request, res: Response) => {
    try {
        const { produto, quantidade, tamanho, image } = req.body;
        const newProduto = new Produto({produto, quantidade, tamanho, image});
        await newProduto.save();
    } catch (error) {
        res.status(500).json({error: "Erro ao criar produto"});
    }
}

//Atualizar produto
export const updateProdutos = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {produto, quantidade, tamanho, image} = req.body;

        const updateProdutos = await Produto.findByIdAndUpdate(id, {produto, quantidade, tamanho, image}, {new:true});

        if(!updateProdutos){
            res.status(404).json({message: "Usuario não encontrado"});
            return;
        }

        res.json(updateProdutos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar", error});
    }
}

//deletar produto
export const deleteProdutos = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const deleteProdutos = await Produto.findByIdAndDelete(id);

        if(!deleteProdutos){
            res.status(404).json({message: "Usuario não encontrado"});
            return;
        }

        res.json(deleteProdutos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar", error});
    }
}