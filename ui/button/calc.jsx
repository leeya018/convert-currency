import React from "react"
import Button from "."

export default function CalcButton({
  children,
  onClick = () => {},
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full h-full flex justify-center items-center text-2xl `}
    >
      {children}
    </button>
  )
}
