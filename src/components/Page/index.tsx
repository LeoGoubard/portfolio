/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Content from "../Content";
import { PageType } from '../../types';

type Props = {
    setPageCounter: Function
    pageItem: PageType
}

function turnPage(setPageCounter: Function, operations: (number)[], leftValue?: number): any {
   return (
    <div onClick={() => setPageCounter((prevState: any) => (
        { ...prevState, value1: operations[2] == 1
          ?
            prevState.value1 - 1
          :
            !!operations[2]
            ?
              prevState.value1 - 2
            :
              prevState.value1 + operations[0], value2: prevState.value2 + operations[1]
        })
      )}
      className={`
        absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[83.5%]
        ${leftValue ? `left-[${leftValue}%]` : ""} w-20
      `}>
    </div>
  )
}

function Page({ setPageCounter, pageItem }: Props) {
  return (
    <div className="border h-5/6 w-2/6 bg-[#F9F9F9] flex flex-col justify-between">
        <Content pageItem={pageItem} />
        {!pageItem.cover ? (turnPage(setPageCounter, [2, 2], 81)) : (turnPage(setPageCounter, [1, 2], 64))}
        {pageItem.index % 2 !== 0 && (turnPage(setPageCounter, [-1, -2, pageItem.index]))}
    </div>

  )
}

export default Page