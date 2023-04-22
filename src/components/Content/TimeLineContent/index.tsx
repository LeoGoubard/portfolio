/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PageType, TranslatedArr } from '../../../types';
import { useTranslation } from "react-i18next";

type Props = {
    setPageCounter: Function
}

function TimeLineContent({ setPageCounter }: Props) {
    const { t } = useTranslation();
    const socials: TranslatedArr = t('timeLine', { returnObjects: true });

    const onClickLink = (itemSocial: any) => {
        const { toGo: { value1, value2 } } = itemSocial;
        setPageCounter(
            (prevState: any) => (
              {
                ...prevState,
                value1,
                value2
              }
            )
        )
    }

  return (
    <div className="flex flex-col h-full">
        <ol className="relative border-l scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-white-100 overflow-auto border-gray-200 m-5 dark:border-gray-700">     
            {socials?.map((itemSocial: any, index: number) => (
                <li className="m-3 mt-6 first:mt-0" key={index}>
                    <div className="relative">
                        <time className="mb-1 font-normal leading-none text-gray-400 text-lg dark:text-gray-500">{itemSocial.date}</time>
                        {!itemSocial.isLinked
                            ? (
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">{itemSocial.title}</h3>
                            ) : (
                                <h3 onClick={() => onClickLink(itemSocial)} className="text-lg cursor-pointer underline z-60 font-semibold text-gray-900 dark:text-gray-500">{itemSocial.title}</h3>
                            )
                        }
                        <p className="mb-4 text-base border-b border-gray-100 font-normal text-gray-500 dark:text-gray-400">{itemSocial.content}</p>
                        {itemSocial.image && (<img className="absolute md:invisible lg:visible top-0 right-0 w-20" src={itemSocial.image} alt={itemSocial.title} />)}
                    </div>
                </li>
            ))}
        </ol>
    </div>  )
}

export default TimeLineContent