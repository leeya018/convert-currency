import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"

import { BiArrowBack } from "react-icons/bi"
import { RiArrowUpDownFill } from "react-icons/ri"
import CalcButton from "ui/button/calc"
const Calculator = observer(
  ({ clearInput, backspace, switchInputs, handleButtonClick, calculate }) => {
    return (
      <div className="flex-1 h-full grid grid-cols-4 grid-rows-4 ">
        <CalcButton className="bg-calc_gray_m" onClick={clearInput}>
          {" "}
          C
        </CalcButton>

        <CalcButton className="bg-calc_gray_m" onClick={backspace}>
          {" "}
          <BiArrowBack size={20} color="white" />
        </CalcButton>
        <CalcButton className="bg-calc_gray_m" onClick={switchInputs}>
          {" "}
          <RiArrowUpDownFill size={20} color="white" />
        </CalcButton>
        <CalcButton
          className="bg-calc_orange"
          onClick={() => handleButtonClick("/")}
        >
          {" "}
          /
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("7")}
        >
          {" "}
          7
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("8")}
        >
          {" "}
          8
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("9")}
        >
          {" "}
          9
        </CalcButton>
        <CalcButton
          className="bg-calc_orange"
          onClick={() => handleButtonClick("X")}
        >
          {" "}
          X
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("4")}
        >
          {" "}
          4
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("5")}
        >
          {" "}
          5
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("6")}
        >
          {" "}
          6
        </CalcButton>
        <CalcButton
          className="bg-calc_orange"
          onClick={() => handleButtonClick("-")}
        >
          {" "}
          -
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("1")}
        >
          {" "}
          1
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("2")}
        >
          {" "}
          2
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("3")}
        >
          {" "}
          3
        </CalcButton>
        <CalcButton
          className="bg-calc_orange"
          onClick={() => handleButtonClick("+")}
        >
          {" "}
          +
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("0")}
        >
          {" "}
          0
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick(".")}
        >
          {" "}
          .
        </CalcButton>
        <CalcButton
          className="bg-calc_gray_s"
          onClick={() => handleButtonClick("%")}
        >
          {" "}
          %
        </CalcButton>
        <CalcButton
          className="w-full h-full flex justify-center items-center text-2xl bg-calc_orange"
          onClick={calculate}
        >
          =
        </CalcButton>
      </div>
    )
  }
)

export default Calculator
