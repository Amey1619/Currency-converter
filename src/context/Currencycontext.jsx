import { createContext,useState } from 'react'
export const Currencycontext=createContext();
const CurrencyProvider = ({children}) => {
    const [fromCurrency, setFormCurrency] = useState("🇺🇸 USD - United States");
    const [toCurrency, setToCurrency] = useState("🇮🇳 INR - India");
    const [firstAmount, setFirstAmount] = useState(0);
    const value = {
      fromCurrency,
      setFormCurrency,
      toCurrency,
      setToCurrency,
      firstAmount,
      setFirstAmount,
    };
  return (
    <Currencycontext.Provider value={value}>{children}</Currencycontext.Provider>
  )
}

export default CurrencyProvider