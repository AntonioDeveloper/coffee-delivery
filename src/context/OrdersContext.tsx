import {
  createContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { Product } from '../@types/Products'
import { api } from '../components/Api'

import { Orders } from '../@types/Orders'

interface OrdersContextType {
  listCart: Product[]
  products: Product[]
  orderFilled: Orders
  orderConfirmBtnSwitch: boolean
  delivery: number
  total: number
  chosenProd: Product
  addToCart: (index: number) => void
  removeFromCart: (e: MouseEvent<HTMLButtonElement>, index: number) => void
  handleDecreaseQt: (index: number) => void
  handleIncreaseQt: (index: number) => void
  onChange: () => number
  handleOrderForm: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmitOrder: (e: FormEvent<HTMLFormElement>) => void
  paymentBtnClick: (e: MouseEvent<HTMLInputElement>) => void
  checkedCredit: boolean
  checkedDebit: boolean
  checkedMoney: boolean
}

interface OrdersContextProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [listCart, setListCart] = useState<Product[]>([])

  const [orderFilled, setOrderFilled] = useState<Orders>({
    listCart: [],
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    totalItems: 0,
    valorEntrega: 0.0,
    totalPedido: 0.0,
    paymentMode: '',
  })

  const [orderConfirmBtnSwitch, setOrderConfirmBtnSwitch] = useState(true)

  const [paymentBtnSwitch, setPaymentBtnSwitch] = useState('')

  const [paymentModeChosen, setPaymentModeChosen] = useState('')

  const [checkedCredit, setCheckedCredit] = useState(false)
  const [checkedDebit, setCheckedDebit] = useState(false)
  const [checkedMoney, setCheckedMoney] = useState(false)

  const initialValue = 0
  const delivery = 5.0
  let total =
    listCart.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      initialValue,
    ) + delivery

  function handleOrderForm(e: ChangeEvent<HTMLInputElement>) {
    const nextOrderFilled: Orders = {
      ...orderFilled,
      listCart,
      totalItems: listCart.length,
      valorEntrega: delivery,
      totalPedido: total,
      [e.target.name]: e.target.value,
    }

    setOrderFilled(nextOrderFilled)

    const isValid =
      nextOrderFilled.cep.length === 8 &&
      nextOrderFilled.rua.length > 0 &&
      nextOrderFilled.numero.length > 0 &&
      nextOrderFilled.bairro.length > 0 &&
      nextOrderFilled.cidade.length > 0 &&
      nextOrderFilled.uf.length > 0 &&
      nextOrderFilled.paymentMode.length > 0

    setOrderConfirmBtnSwitch(!isValid)
  }

  function handleSubmitOrder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const closedOrder = orderFilled

    console.log(JSON.stringify(closedOrder))

    window.location.href = '/success-page'
  }

  useEffect(() => {
    const linkCloseCart = document.querySelector('.btn-closeCart')
    if (!(linkCloseCart instanceof HTMLElement)) return

    if (orderConfirmBtnSwitch) {
      linkCloseCart.classList.add('disabled')
      linkCloseCart.classList.remove('enabled')
    } else {
      linkCloseCart.classList.remove('disabled')
      linkCloseCart.classList.add('enabled')
    }
  }, [orderConfirmBtnSwitch])

  function paymentBtnClick(e: MouseEvent<HTMLInputElement>) {
    e.preventDefault()
    setPaymentBtnSwitch(e.currentTarget.id)
    setPaymentModeChosen(e.currentTarget.name)
  }

  useEffect(() => {
    if (!paymentModeChosen) return

    setOrderFilled((prev) => ({
      ...prev,
      paymentMode: paymentModeChosen,
    }))

    switch (paymentModeChosen) {
      case 'Cartão de Crédito':
        setCheckedCredit(!false)
        setCheckedDebit(false)
        setCheckedMoney(false)
        break
      case 'Cartão de Débito':
        setCheckedCredit(false)
        setCheckedDebit(!false)
        setCheckedMoney(false)
        break
      case 'Dinheiro':
        setCheckedCredit(false)
        setCheckedDebit(false)
        setCheckedMoney(!false)
        break
      default:
        setCheckedCredit(false)
        setCheckedDebit(false)
        setCheckedMoney(false)
    }

    console.log(paymentModeChosen)
  }, [paymentBtnSwitch, paymentModeChosen])

  useEffect(() => {
    api
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log('putz, que error: ' + err)
      })
  }, [])

  function addToCart(index: number) {
    const foundProduct = products.find((prod) => prod.id === index)
    if (!foundProduct) return

    const nextListCart = [...listCart, foundProduct]
    setListCart(nextListCart)

    total =
      nextListCart.reduce(
        (prev, curr) => prev + curr.quantity * curr.price,
        initialValue,
      ) + delivery

    setOrderFilled((prev) => ({
      ...prev,
      listCart: nextListCart,
      totalItems: nextListCart.length,
      valorEntrega: delivery,
      totalPedido: total,
    }))
  }

  function removeFromCart(_e: MouseEvent<HTMLButtonElement>, index: number) {
    setListCart((prev) => prev.filter((product) => product.id !== index))
  }

  const [chosenProd, setChosenProd] = useState<Product>({
    id: 0,
    name: '',
    cathegory: [],
    description: '',
    price: 0.0,
    quantity: 0,
    image: '',
  })

  function handleDecreaseQt(index: number) {
    const product = products.find((p) => p.id === index)
    if (!product) return
    if (product.quantity <= 0) return

    const updatedProduct = { ...product, quantity: product.quantity - 1 }
    setChosenProd(updatedProduct)
    setProducts((prev) =>
      prev.map((p) => (p.id === index ? updatedProduct : p)),
    )
  }

  function handleIncreaseQt(index: number) {
    const product = products.find((p) => p.id === index)
    if (!product) return

    const updatedProduct = { ...product, quantity: product.quantity + 1 }
    setChosenProd(updatedProduct)
    setProducts((prev) =>
      prev.map((p) => (p.id === index ? updatedProduct : p)),
    )
  }

  function onChange() {
    return chosenProd.quantity
  }

  return (
    <OrdersContext.Provider
      value={{
        listCart,
        products,
        addToCart,
        removeFromCart,
        chosenProd,
        handleDecreaseQt,
        handleIncreaseQt,
        onChange,
        orderFilled,
        orderConfirmBtnSwitch,
        delivery,
        total,
        checkedCredit,
        checkedDebit,
        checkedMoney,
        handleOrderForm,
        handleSubmitOrder,
        paymentBtnClick,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
