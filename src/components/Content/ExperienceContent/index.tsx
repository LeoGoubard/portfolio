/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { t } from 'i18next';

type Props = {
    experienceIndex: number
}
type Experience = [{
    creation: []
    aws: []
    project: []
    javascript: []
    title: string
    job: string
    lieu: string
    site: string
    domain: string
    content: string
    team: []
}]

const ExperienceContent = ({experienceIndex}: Props) => {
    const experiences: Experience = t('experience', { returnObjects: true });
  return (
    <div className="text-black flex flex-col items-center m-3">
        <h1>{experiences[experienceIndex].title}</h1>
        <h2>{experiences[experienceIndex].job}</h2>
        <p>{experiences[experienceIndex].lieu}</p>
        <div className="relative flex flex-row">
            <>
                <p>Equipe:</p>
                {experiences[experienceIndex].team.map((teamItem) => (
                <img key={teamItem} className="w-5 h-5 ml-1" src="https://zupimages.net/up/23/17/xz7w.png" alt=""></img>
                ))}
            </>
        </div>
        <div className="flex flex-row">
            <h1>Site:</h1>
            <a href="Iziqo.fr" className="mx-2 underline">{experiences[experienceIndex].site}</a>
        </div>
        <div className="flex flex-row">
            <h1>Domaine:</h1>
            <p className="mx-2">{experiences[experienceIndex].domain}</p>
        </div>
        <p className="text-sm mt-5">{experiences[experienceIndex].content}</p>
        <div className="flex mt-5 flex-row h-2/6 text-sm scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-white-100 overflow-auto">
            <ul>
                <>
                    <li className="mt-2">Realisations:</li>
                    {experiences[experienceIndex].creation.map((creationItem: string, index) => (
                        <li key={index}> - {creationItem}</li>
                    ))}
                    <li className="mt-2">Gestion du projet: </li>
                    {experiences[experienceIndex].project.map((projectItem: string, index) => (
                        <li key={index}> - {projectItem}</li>
                    ))}

                    <li className="mt-2">Conception et développement en Javascript:</li>
                    {experiences[experienceIndex].javascript.map((javascriptItem: string, index) => (
                        <li key={index}> - {javascriptItem}</li>
                    ))}

                    <li className="mt-2">Utilisation des Outils AWS:</li>
                    {experiences[experienceIndex].aws.map((awsItem: string, index) => (
                        <li key={index}> - {awsItem}</li>
                    ))}
                </>
            </ul>
        </div>
    </div>
  )
}

export default ExperienceContent