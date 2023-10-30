import useLocalStorage from "hooks/useLocalStorage"
import { observer } from "mobx-react-lite"
import LessInput from "ui/input/less"
import { useEffect, useState } from "react"
import StandardButton from "ui/button/standard"
import { debtStore } from "mobx/debtStore"
import CurrencyFlag from "react-currency-flags"
import { modalStore } from "mobx/modalStore"
import { formatDate, formatTime, freecurrencyapi, modals } from "lib/util"
import { currencyStore } from "mobx/currencyStore"

const TargetCurrency = observer(({ result }) => {
  return (
    <div
      className="h-36 flex justify-between  items-center 
    px-5 bg-calc_gray_l ring-0"
    >
      <div className="flex flex-col justify-center items-center">
        <CurrencyFlag
          onClick={() => {
            modalStore.openModal(modals.currency)
            currencyStore.setChosenInp("to")
          }}
          className="rounded-full w-36 h-36"
          width={50}
          height={50}
          currency={currencyStore.currencyTo}
          size="xl"
        />
        <div>{currencyStore.currencyTo}</div>
      </div>
      <input
        type="text"
        value={result}
        className="flex w-full h-full bg-calc_gray_l"
      />
    </div>
  )
})

export default TargetCurrency
