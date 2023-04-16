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
  return (
    <div className="border h-5/6 w-2/6 bg-[#F9F9F9] flex flex-col justify-between">
        <Content pageItem={pageItem} />
        {!pageItem.cover && (
                <div onClick={() => setPageCounter((prevState: any) => ({ ...prevState, value1: prevState.value1 + 2, value2: prevState.value2 + 2 }))} className="absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[83%] left-[81%] w-20">

                </div>
        )}
        {pageItem.index % 2 !== 0 && (
                <div onClick={() => setPageCounter((prevState: any) => ({ ...prevState, value1: pageItem.index == 1 ? prevState.value1 - 1 : prevState.value1 - 2, value2: prevState.value2 - 2 }))} className="absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[83%] w-20">

                </div>
        )}
        {pageItem.cover && (
            <div onClick={() => setPageCounter((prevState: any) => ({ ...prevState, value1: prevState.value1 + 1, value2: prevState.value2 + 2 }))} className="absolute bg-[rgb(36,36,36)] opacity-5 cursor-pointer h-[83%] left-[64%] w-20">

            </div>
        )}
    </div>

  )
}

export default Page