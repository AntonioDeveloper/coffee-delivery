import { createContext, ReactNode } from 'react';
import { Product } from "../@types/Products";
import { api } from "../components/Api";
import { useState, useEffect } from 'react';
import { Orders } from '../@types/Orders';

interface OrdersContextType {
  listCart: Product[];
  products: Product[];
  orderFilled: Orders;
  orderConfirmBtnSwitch: boolean;
  delivery: number;
  total: number;
  chosenProd: Product;
  addToCart: (index: number) => void;
  removeFromCart: (index: number) => void;
  handleDecreaseQt: (index: number) => void;
  handleIncreaseQt: (index: number) => void;
  onChange: () => void;
  handleOrderForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitOrder: (e: React.FormEvent<HTMLFormElement>) => void;
  paymentBtnClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  checkedCredit: boolean;
  checkedDebit: boolean;
  checkedMoney: boolean;
}

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersContext = createContext({} as OrdersContextType);

export function OrdersContextProvider({ children }: OrdersContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [listCart, setListCart] = useState<Product[]>([]);

  const [orderFilled, setOrderFilled] = useState<Orders>({
    listCart: [],
    cep: "",
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    totalItems: 0,
    valorEntrega: 0.00,
    totalPedido: 0.00,
    paymentMode: ""
  })

  let [orderConfirmBtnSwitch, setOrderConfirmBtnSwitch] = useState(true);

  let [paymentBtnSwitch, setPaymentBtnSwitch] = useState("");

  let [paymentModeChosen, setPaymentModeChosen] = useState("");

  let [checkedCredit, setCheckedCredit] = useState(false);
  let [checkedDebit, setCheckedDebit] = useState(false);
  let [checkedMoney, setCheckedMoney] = useState(false);

  const initialValue = 0;
  let delivery = 5.00;
  let total = listCart.reduce((prev, curr) => prev + (curr.quantity * curr.price), initialValue) + delivery;

  function handleOrderForm(e: React.ChangeEvent<HTMLInputElement>) {
    orderFilled.totalItems = listCart.length;
    orderFilled.valorEntrega = 5.00;
    orderFilled.totalPedido = total;

    setOrderFilled({
      ...orderFilled, listCart: listCart, [e.target.name]: e.target.value
    });

    orderFilled.cep.length === 8 && orderFilled.rua.length > 0 && orderFilled.numero.length > 0 && orderFilled.bairro.length > 0 && orderFilled.cidade.length > 0 && orderFilled.uf.length > 0 && orderFilled.paymentMode.length > 0 ? (setOrderConfirmBtnSwitch(false), console.log('certo', orderConfirmBtnSwitch)) : (setOrderConfirmBtnSwitch(true), console.log('errado', orderConfirmBtnSwitch));
  }

  function handleSubmitOrder(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const closedOrder = orderFilled;

    console.log(JSON.stringify(closedOrder));

    window.location.href = "/success-page"
  }

  const linkCloseCart = document.querySelector(".btn-closeCart")

  useEffect(() => {
    orderConfirmBtnSwitch = !true
    linkCloseCart?.classList.remove("disabled");
    linkCloseCart?.classList.add("enabled");
  }, [orderConfirmBtnSwitch])

  let btnClicked: any;


  function paymentBtnClick(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    paymentBtnSwitch = e.currentTarget.id;
    setPaymentBtnSwitch(paymentBtnSwitch);
    setPaymentModeChosen(e.currentTarget.name);



  }

  useEffect(() => {
    let paymentMode = paymentModeChosen;
    btnClicked = document.getElementById(`${paymentBtnSwitch}`)!;
    setOrderFilled({

      ...orderFilled, paymentMode
    });

    switch (paymentModeChosen) {
      case "Cartão de Crédito":
        setCheckedCredit(!false);
        setCheckedDebit(false);
        setCheckedMoney(false);
        break;
      case "Cartão de Débito":
        setCheckedCredit(false);
        setCheckedDebit(!false);
        setCheckedMoney(false);
        break;
      case "Dinheiro":
        setCheckedCredit(false);
        setCheckedDebit(false);
        setCheckedMoney(!false);
        break;
      default:
        setCheckedCredit(false);
        setCheckedDebit(false);
        setCheckedMoney(false);
    }

    console.log(paymentModeChosen);

  }, [paymentBtnSwitch])

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log("putz, que error: " + err);
      });
  }, []);

  function addToCart(index: number) {

    const foundProduct: Product = products.find(prod => {
      if (prod.id === index) {
        return prod;
      }
    })!; //Exclamation point garante que a variável não vai ser null e sim o tipo Produto

    listCart.push(foundProduct);
    setListCart(listCart);
    total = listCart.reduce((prev, curr) => prev + (curr.quantity * curr.price), initialValue) + delivery;

    orderFilled.totalPedido = total;

    setOrderFilled({
      ...orderFilled, listCart: listCart
    });

    console.log(listCart, total);
  }

  function removeFromCart(index: number) {

    const foundProduct: Product = products.find(prod => {
      if (prod.id === index) {
        return prod;
      }
    })!

    listCart.splice(foundProduct.id, 1);
    setListCart(listCart);

    let el = document.querySelector(`div.prod-cart:nth-child(${foundProduct.id})`);
    if (el === null) {
      el = document.querySelector(`div.prod-cart:first-child`);
      el?.remove();
      console.log(el, foundProduct.id);
    } else {
      el = document.querySelector(`div.prod-cart:nth-child(${foundProduct.id})`);
      el?.remove();
      console.log(el, foundProduct.id);
    }

    console.log(foundProduct.id);

    // let removedFromTotal = listCart.reduce((prev, curr) => prev + (curr.quantity * curr.price), initialValue);
    // console.log("Removed", total - removedFromTotal);
    // total = total - removedFromTotal;

    // orderFilled.totalPedido = total;

    // setOrderFilled({
    //   ...orderFilled, listCart: listCart
    // });

  }

  const [chosenProd, setChosenProd] = useState<Product>({
    id: 0,
    name: "",
    cathegory: [],
    description: "",
    price: 0.0,
    quantity: 0,
    image: ""
  });

  function handleDecreaseQt(index: number) {
    if (chosenProd.quantity > 0) {
      const findProduct: Product = products.find(product => {
        if (product.id === index) {
          product.quantity -= 1;
          return product;
        }
      })!;
      setChosenProd({ ...findProduct });
      return listCart;
    } else {
      return;
    }
  }

  let findProduct: Product;

  function handleIncreaseQt(index: number) {
    findProduct = products.find(product => {
      if (product.id === index) {
        product.quantity += 1;
        return product;
      }
    })!;
    setChosenProd({ ...findProduct });
  }

  function onChange() {
    return chosenProd.quantity;
  }

  return (
    <OrdersContext.Provider value={{ listCart, products, addToCart, removeFromCart, chosenProd, handleDecreaseQt, handleIncreaseQt, onChange, orderFilled, orderConfirmBtnSwitch, delivery, total, checkedCredit, checkedDebit, checkedMoney, handleOrderForm, handleSubmitOrder, paymentBtnClick }}>
      {children}
    </OrdersContext.Provider>
  )
}