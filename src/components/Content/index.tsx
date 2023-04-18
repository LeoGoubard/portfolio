/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageType } from '../../types';
import CoverContent from './coverContent';
import { useTranslation } from "react-i18next";

type Props = {
    pageItem: PageType
}
function Content({ pageItem }: Props) {
    const { t } = useTranslation();
    function timeLineContent(timeLineItem: any, itemSocial: any) {
        const { content1, content2, date } = timeLineItem;
        return (
            <>
                <time className="mb-1 font-normal leading-none text-gray-400 text-lg dark:text-gray-500">{itemSocial.date}</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">{itemSocial.content1}</h3>
                <p className="mb-4 text-base border-b border-gray-100 font-normal text-gray-500 dark:text-gray-400">{itemSocial.content2}</p>
            </>
        )
    }

  return (
    <>
    {pageItem.cover && (
            <CoverContent pageItem={pageItem} />
        )}
        {pageItem.index == 1 && (
            <div className="flex flex-col h-full">
                <ol className="relative border-l scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-white-100 overflow-auto border-gray-200 m-5 dark:border-gray-700">     
                    {pageItem.timeLine?.map((timeLineItem: any, index) => {
                            const socials = t('timeLine', { returnObjects: true });
                        return (
                        socials?.map((itemSocial: any) => (
                            <li className="m-3 mt-6 first:mt-0" key={index}>
                                {timeLineContent(timeLineItem, itemSocial)}
                            </li>
                        ))
                    )})} 
                </ol>
                <div className="text-black flex justify-end w-full">{pageItem.index}</div>
            </div>
        )}
    </>
    )
}

export default Content