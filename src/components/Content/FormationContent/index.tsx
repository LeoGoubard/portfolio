/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from "react-i18next";

type Props = {}

export default function FormationContent({}: Props) {
    const { t } = useTranslation();
  return (
    <div className="text-gray-700 flex justify-center flex-col items-center">
        <h1 className="text-3xl m-2">{t('oclock.title')}</h1>
        <h3>{t('oclock.date')}</h3>
        <p className="text-sm m-2">{t('oclock.description1')}</p>
        <p className="text-sm mx-2 font-semibold">{t('oclock.description2')}</p>
        <p className="text-sm m-2">{t('oclock.description3')}</p>
        <div className="m-1 flex flex-col w-full">
            <div className="m-2 flex justify-center flex-col items-center">
                <img className="w-8 h-8" src="https://zupimages.net/up/23/16/0gol.jpg" alt="apprendre"/>
                <h2 className="text-xl font-semibold m-2">{t('oclock.learn')}</h2>
                <p className="text-sm">{t('oclock.learnContent')}</p>
            </div>
            <div className="m-2 flex justify-center flex-col items-center">
                <img className="w-8 h-8" src="https://zupimages.net/up/23/16/9spb.jpg" alt="concevoir"/>
                <h2 className="text-xl font-semibold m-2">{t('oclock.build')}</h2>
                <p className="text-sm">{t('oclock.buildContent')}</p>
            </div>
            <div className="m-2 flex justify-center flex-col items-center">
                <img className="w-8 h-8" src="https://zupimages.net/up/23/16/b9nq.jpg" alt="developper"/>
                <h2 className="text-xl font-semibold m-2">{t('oclock.dev')}</h2>
                <p className="text-sm">{t('oclock.devContent')}</p>
            </div>
        </div>
    </div>  )
}