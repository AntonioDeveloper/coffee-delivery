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
  handleOrderForm: (e: any) => void;
  handleSubmitOrder: (e: any) => void;
  paymentBtnClick: (e: any) => void;
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

  //let [paymentBtnEnable, setPaymentBtnEnable] = useState(false);

  const initialValue = 0;
  let delivery = 5.00;
  let total = listCart.reduce((prev, curr) => prev + (curr.quantity * curr.price), initialValue) + delivery;

  function handleOrderForm(e: any) {
    orderFilled.totalItems = listCart.length;
    orderFilled.valorEntrega = 5.00;
    orderFilled.totalPedido = total;


    console.log(orderFilled.paymentMode)

    setOrderFilled({
      ...orderFilled, listCart: listCart, [e.target.name]: e.target.value
    });

    orderFilled.cep.length === 8 && orderFilled.rua.length > 0 && orderFilled.numero.length > 0 && orderFilled.bairro.length > 0 && orderFilled.cidade.length > 0 && orderFilled.uf.length > 0 && orderFilled.paymentMode.length > 0 ? (setOrderConfirmBtnSwitch(false), console.log('certo', orderConfirmBtnSwitch)) : (setOrderConfirmBtnSwitch(true), console.log('errado', orderConfirmBtnSwitch));
  }

  useEffect(() => {
    console.log(orderFilled);
  }, [orderFilled]);

  function handleSubmitOrder(e: any) {

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

  function paymentBtnClick(e: any) {
    e.preventDefault();
    paymentBtnSwitch = e.target.id;
    setPaymentBtnSwitch(paymentBtnSwitch);
    setPaymentModeChosen(e.target.name);
  }

  useEffect(() => {
    let paymentMode = paymentModeChosen;
    btnClicked = document.getElementById(`${paymentBtnSwitch}`);
    btnClicked?.classList.add("selected");
    //console.log(paymentBtnSwitch, paymentModeChosen)
    setOrderFilled({
      ...orderFilled, paymentMode
    });
  }, [paymentBtnSwitch])

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log("putz, que error: " + err);
      });
  }, []);

  function addToCart(index: number) {

    const foundProduct: any = products.find(prod => {
      if (prod.id === index) {
        return prod;
      }
    })

    listCart.push(foundProduct);
    setListCart(listCart);
  }

  function removeFromCart(index: number) {

    const foundProduct: any = products.find(prod => {
      if (prod.id === index) {
        return prod;
      }
    })

    listCart.splice(foundProduct.id, 1);
    setListCart(listCart);
    console.log(listCart);

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
  }

  const [chosenProd, setChosenProd] = useState({
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
      const findProduct: any = products.find(product => {
        if (product.id === index) {
          product.quantity -= 1;
          return product;
        }
      });
      setChosenProd({ ...findProduct });
      return listCart;
    } else {
      return;
    }
  }

  let findProduct: any;

  function handleIncreaseQt(index: number) {
    findProduct = products.find(product => {
      if (product.id === index) {
        product.quantity += 1;
        return product;
      }
    });
    setChosenProd({ ...findProduct });
  }

  function onChange() {
    return chosenProd.quantity;
  }

  return (
    <OrdersContext.Provider value={{ listCart, products, addToCart, removeFromCart, chosenProd, handleDecreaseQt, handleIncreaseQt, onChange, orderFilled, orderConfirmBtnSwitch, delivery, total, handleOrderForm, handleSubmitOrder, paymentBtnClick }}>
      {children}
    </OrdersContext.Provider>
  )
}