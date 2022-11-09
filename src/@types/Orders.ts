import { Product } from "./Products";

export interface Orders {
  listCart: Product[];
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  totalItems: number;
  valorEntrega: number;
  totalPedido: number;
  paymentMode: string;
}