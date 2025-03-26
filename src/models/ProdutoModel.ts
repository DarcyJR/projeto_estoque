import mongoose, { Document, Schema } from "mongoose";

export interface IProduto extends Document{
    produto: string;
    quantidade: number;
    tamanho: number;
    image: string;
}

const ProdutoSchema: Schema = new Schema<IProduto>({
    produto:{type: String},
    quantidade:{type: Number},
    tamanho:{type: Number},
    image:{type: String},
});

export const Produto = mongoose.model<IProduto>("produtos", ProdutoSchema);