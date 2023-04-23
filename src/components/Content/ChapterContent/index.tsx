import React from 'react'
import { t } from 'i18next';
import { PageType, TranslatedArr } from '../../../types';

type Props = {
    pageItem: PageType,
}

const ChapterContent = ({ pageItem }: Props) => {
    const chapterContent: TranslatedArr = t('chapter', { returnObjects: true });
  return (
    <div className="h-screen flex">
        <div className="text-black flex justify-center flex-col items-center">
            <h1 className="text-3xl mb-10 font-semibold">{chapterContent[pageItem.chapterIndex || 0].title}</h1>                      
            <p className="mx-2 text-base font-normal dark:text-gray-500">{chapterContent[pageItem.chapterIndex || 0].content1}</p>                     
            <p className="mx-2 text-base font-normal dark:text-gray-500">{chapterContent[pageItem.chapterIndex || 0].content2}</p>                     
            <p className="mx-2 text-base font-normal dark:text-gray-500">{chapterContent[pageItem.chapterIndex || 0].content3}</p>                     
        </div>
    </div>
)}

export default ChapterContent;