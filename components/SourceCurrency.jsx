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

const SourceCurrency = observer(({ input, setInput }) => {
  return (
    <div className="h-36 flex  justify-between items-center px-5 bg-calc_gray_l ring-0">
      <div className="flex flex-col justify-center items-center">
        <CurrencyFlag
          className="rounded-full w-36 h-36"
          width={50}
          height={50}
          currency={currencyStore.currencyFrom}
          size="xl"
          onClick={() => {
            modalStore.openModal(modals.currency)
            currencyStore.setChosenInp("from")
          }}
        />
        <div>{currencyStore.currencyFrom}</div>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput((prev) => {
            if (prev) {
              return e.target.value
            }
            return 0
          })
        }}
        className="flex w-full h-full bg-calc_gray_l"
      />
    </div>
  )
})

export default SourceCurrency
