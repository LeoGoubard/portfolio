/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Content from "../Content";
import { PageType } from '../../types';

type Props = {
    setPageCounter: Function
    pageItem: PageType
}

  function Page({ setPageCounter, pageItem }: Props) {
    function turnPage(setPageCounter: Function, operations: (number)[], isRight: boolean): any {
      return (
        <div
          onClick={() => setPageCounter(
            (prevState: any) => (
              {
                ...prevState,
                value1: operations[2] == 1 ? prevState.value1 - 1 : !!operations[2] ? prevState.value1 - 2 : prevState.value1 + operations[0],
                value2: prevState.value2 + operations[1]
              }
            )
          )} 
            className={`absolute bg-[rgb(36,36,36)] z-10 opacity-5 cursor-pointer h-full ${isRight ? '-right-0' : 'left-0'} w-10`}
  >
        </div>
      )
    }
        
    return (
      <div className={`relative border h-5/6 w-2/6 bg-[#F9F9F9] flex flex-col justify-between`}>
        <Content pageItem={pageItem} setPageCounter={setPageCounter} />
        {!pageItem.isCover && pageItem.index % 2 == 0 && (turnPage(setPageCounter, [2, 2], true))}
        {pageItem.isCover && (turnPage(setPageCounter, [1, 2], true))}
        {Math.abs(pageItem.index % 2) == 1 && (turnPage(setPageCounter, [-1, -2, pageItem.index], false))}
      </div>

  )
}

export default Page