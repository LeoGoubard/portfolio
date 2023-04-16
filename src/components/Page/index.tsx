/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Content from "../Content";

type Props = {
    setPageCounter: Function
    pageItem: { cover?: boolean, index: number }
}

function Page({ setPageCounter, pageItem }: Props) {
    const words = ["Javascript developer 1.7 years of experience", "For my love of Cinema and Literature"]
  return (
    <div className="border h-5/6 w-2/6 bg-slate-100 flex flex-col justify-between">
        <Content type="cover" words={words} pageCounter={pageItem.index} />
        {!pageItem.cover && (
                <div onClick={() => setPageCounter((prevState: any) => ({ ...prevState, value1: prevState.value1 + 2, value2: prevState.value2 + 2 }))} className="absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[81%] left-[80%] w-20">

                </div>
        )}
        {pageItem.index % 2 !== 0 && (
                <div onClick={() => setPageCounter((prevState: any) => ({ ...prevState, value1: pageItem.index == 1 ? prevState.value1 - 1 : prevState.value1 - 2, value2: prevState.value2 - 2 }))} className="absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[81%] w-20">

                </div>
        )}
        {pageItem.cover && (
            <div onClick={() => setPageCounter((prevState: any) => ({ ...prevState, value1: prevState.value1 + 1, value2: prevState.value2 + 2 }))} className="absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[81%] left-[63%] w-20">

            </div>
        )}
    </div>

  )
}

export default Page