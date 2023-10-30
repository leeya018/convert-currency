import React, { useState } from "react"

import { useRouter } from "next/router"
import Image from "next/image"

import { useEffect } from "react"
import { BiArrowBack } from "react-icons/bi"
import { RiArrowUpDownFill } from "react-icons/ri"
import axios from "axios"
import { currencyStore } from "mobx/currencyStore"
import { debtStore } from "mobx/debtStore"
import { observer } from "mobx-react-lite"
import CurrencyFlag from "react-currency-flags"
import { formatDate, formatTime, freecurrencyapi, modals } from "lib/util"
import Currencies from "components/currencies"
import { modalStore } from "mobx/modalStore"
import Calculator from "components/Calculator"
import Footer from "components/Footer"
import CurrencySection from "components/TargetCurrency"
import TargetCurrency from "components/TargetCurrency"
import SourceCurrency from "components/SourceCurrency"

const index = observer(() => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [today, setToday] = useState(new Date())
  const [rate, setRate] = useState(1)

  useEffect(() => {
    freecurrencyapi
      .latest({
        base_currency: currencyStore.currencyFrom,
        currencies: currencyStore.currencyTo,
      })
      .then((response) => {
        console.log(response)
        const rate = response.data[currencyStore.currencyTo]
        setResult((rate * input).toFixed(2))
        setRate(rate)
      })
  }, [
    input,
    currencyStore.currencyFrom,
    currencyStore.currencyTo,
    currencyStore.choenInp,
    modalStore.modalName,
  ])

  useEffect(() => {
    const inter = setInterval(() => {
      setToday(new Date())
    }, 1000)
    return () => clearInterval(inter)
  }, [])

  const switchInputs = () => {
    let temp = input
    setInput(result)
    setResult(temp)
    currencyStore.switchCurr()
  }
  const handleButtonClick = (value) => {
    setInput((prev) => prev + value)
  }

  const calculate = () => {
    try {
      console.log(eval(input).toString())
      setInput(eval(input).toString())
    } catch (error) {
      setInput("Error")
    }
  }

  const backspace = () => {
    setInput((prev) => {
      if (prev) {
        return prev.slice(0, -1)
      }
    })
  }

  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col  text-calc_white  ">
      {modalStore.modalName === modals.currency && <Currencies />}
      {/* source currency */}
      {modalStore.modalName !== modals.currency && (
        <SourceCurrency input={input} setInput={setInput} />
      )}
      {/* target currency */}
      {!modalStore.modalName !== modals.currency && (
        <TargetCurrency result={result} />
      )}
      {/* calculator */}
      {!modalStore.modalName !== modals.currency && (
        <Calculator
          clearInput={() => setInput("")}
          backspace={backspace}
          switchInputs={switchInputs}
          handleButtonClick={handleButtonClick}
          calculate={calculate}
        />
      )}

      {/* footer */}
      <Footer today={today} rate={rate} />
    </div>
  )
})
export default index
