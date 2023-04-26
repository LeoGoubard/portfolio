/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from "react-i18next";

type Props = {}

export default function FormationContent({}: Props) {
    const { t } = useTranslation();
    const sectionGen = ({ index, alt, image, translations }: any) => {
        return (
            <div key={index} className="m-2 flex justify-center flex-col items-center">
                <img className="w-8 h-8" src={image} alt={alt} />
                <h2 className="text-xl font-semibold m-2">{t(`oclock.${translations.title}`)}</h2>
                <p className="text-sm">{t(`oclock.${translations.content}`)}</p>
            </div>
        )
    }
    const itemstoGen: any[] = [
        {
            alt: "apprendre",
            image: "https://zupimages.net/up/23/16/0gol.jpg",
            translations: {
                title: "learn",
                content: "learnContent"
            }
        },
        {
            alt: "concevoir",
            image: "https://zupimages.net/up/23/16/9spb.jpg",
            translations: {
                title: "build",
                content: "buildContent"
            }
        },
        {
            alt: "developper",
            image: "https://zupimages.net/up/23/16/b9nq.jpg",
            translations: {
                title: "dev",
                content: "devContent"
            }
        },
    ]
  return (
    <div className="text-gray-700 flex justify-center flex-col items-center">
        <h1 className="text-3xl m-2">{t('oclock.title')}</h1>
        <h3>{t('oclock.date')}</h3>
        <p className="text-sm m-2">{t('oclock.description1')}</p>
        <p className="text-sm mx-2 font-semibold">{t('oclock.description2')}</p>
        <p className="text-sm m-1">{t('oclock.description3')}</p>
        <div className="flex flex-col w-full">
            {itemstoGen.map((genItem, index) => (
                    sectionGen({ index, alt: genItem.alt, image: genItem.image, translations: genItem.translations })
                )
            )}
        </div>
    </div> 
    )
}