/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageType } from '../../types';
import { useTranslation } from "react-i18next";
type Props = {
    pageItem: PageType
}

export default function CoverContent({ pageItem }: Props) {
    const { t } = useTranslation();
    const [text, count] = useTypewriter({
        words: [t('cover.firstAutoText'), t('cover.secondAutoText')] || [],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <>
    <div className="font-extrabold text-black ml-2">
        <div className="text-xs flex justify-end ">
            <p className="font-extrabold text-black p-2">{t('cover.header')}</p>
        </div>
        <h1 className="text-7xl mt-2">Leo <br />Goubard</h1>
    </div>
    <div>
        <h1 className="text-l text-black font-semibold ml-2">
            <span className="">{text}</span>
            <Cursor cursorColor="#000000" />
        </h1>
        <img
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="p-2 object-cover md:w-64 md:h-95 lg:w-auto"
        />
        <div className="flex justify-between">
            <p className="font-extrabold text-black text-xs pl-2 pb-1">©2023</p>
            <p className="font-bold text-black text-xs pl-2 pb-1 pr-2">{pageItem.index === 0 ? "" : pageItem.index}</p>
        </div>
    </div> 
</>  )
}