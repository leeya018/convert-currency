import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { PATH_NAMES } from "lib/util"
import { useRouter } from "next/router"
import { useParams } from "react-router-dom"
import { TbArrowBackUp } from "react-icons/tb"
import { formatDate, formatTime, freecurrencyapi, modals } from "lib/util"
import { currencyStore } from "mobx/currencyStore"
import { GoInfo } from "react-icons/go"

const Footer = observer(({ today, rate }) => {
  return (
    <div className="flex justify-between items-center w-full bg-calc_gray_l px-5 ">
      <TbArrowBackUp size={20} color="white" />
      <div className="flex flex-col items-center">
        <div className="text-calc_green">
          {formatDate(today) + "    " + formatTime(today)}
        </div>
        <div className="text-calc_gray_s">{`1${currencyStore.currencyFrom} = ${rate}${currencyStore.currencyTo}`}</div>
      </div>

      <GoInfo size={20} color="white" />
    </div>
  )
})

export default Footer
