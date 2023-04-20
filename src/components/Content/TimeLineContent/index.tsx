import React from 'react'
import { PageType } from '../../../types';
import { useTranslation } from "react-i18next";

type Props = {
    pageItem: PageType
}
type MyStructure = Object[];

function TimeLineContent({ pageItem }: Props) {
    const { t, i18n } = useTranslation();
    function timeLineContent(itemSocial: any) {
        return (
            <div>
                <time className="mb-1 font-normal leading-none text-gray-400 text-lg dark:text-gray-500">{itemSocial.date}</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">{itemSocial.content1}</h3>
                <p className="mb-4 text-base border-b border-gray-100 font-normal text-gray-500 dark:text-gray-400">{itemSocial.content2}</p>
            </div>
        )
    }
    const socials: MyStructure = t('timeLine', { returnObjects: true });
  return (
    <div className="flex flex-col h-full">
    <ol className="relative border-l scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-white-100 overflow-auto border-gray-200 m-5 dark:border-gray-700">     
        {socials?.map((itemSocial: any, index: number) => (
            <li className="m-3 mt-6 first:mt-0" key={index}>
                {timeLineContent(itemSocial)}
            </li>
        ))}
    </ol>
</div>  )
}

export default TimeLineContent