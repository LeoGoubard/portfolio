/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PageType } from '../../types';
import CoverContent from './CoverContent/coverContent';
import TimeLineContent from './TimeLineContent';
import ChapterContent from './ChapterContent';
import FormationContent from './FormationContent';
import ProjectContent from './ProjectContent';


type Props = {
    pageItem: PageType,
    setPageCounter: Function
    pageMax: number
}

function Content({ pageMax, pageItem, setPageCounter }: Props) {
    const { isChapter, isTimeLine, isFormation, isCover, isProject, projectIndex, isExperience } = pageItem;
  return (
    <>
        {isCover ? (
            <CoverContent pageItem={pageItem} />
        ) : (
            <>
                {isTimeLine && (
                    <TimeLineContent setPageCounter={setPageCounter} />
                )}
                {isChapter && (
                    <ChapterContent pageItem={pageItem} />
                )}
                {isFormation && (
                    <FormationContent pageItem={pageItem} />
                )}
                {isProject && (
                    <ProjectContent projectIndex={projectIndex}/>
                )}
                {isExperience && (
                    <div className="text-black flex flex-col items-center m-3">
                        <h1>Joinery Business Solution</h1>
                        <h2>Développeur Full Stack React/Node</h2>
                        <p>Nantes, Pays de la Loire, France</p>
                        <div className="relative flex flex-row">
                            <p>Equipe:</p>
                            <img className="w-5 h-5 mx-2" src="https://zupimages.net/up/23/17/xz7w.png" alt=""></img>
                            <img className="w-5 h-5" src="https://zupimages.net/up/23/17/xz7w.png" alt=""></img>
                        </div>
                        <div className="flex flex-row">
                            <h1>Site:</h1>
                            <a href="Iziqo.fr" className="mx-2 underline">Iziqo.fr</a>
                        </div>
                        <div className="flex flex-row">
                            <h1>Domaine:</h1>
                            <p className="mx-2">Construction (Menuiserie)</p>
                        </div>
                        <p className="text-sm mt-5"> Projet SaaS - une partie Menuiserie où Janneau menuiserie peut cataloguer ses produits et définir/configurer les problèmes métiers de chacune de leurs menuiseries.
                            Une seconde partie Artisan où le Client/Artisan va pouvoir créer son Devis et recevoir sa menuiserie en chantier ou chez un particulier.
                        </p>
                        <div className="flex mt-5 flex-row h-2/6 text-sm scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-white-100 overflow-auto">
                            <ul>
                                <li></li>
                                <li> - Participation/Animation cérémonies Agile</li>
                                <li> - Analyse des besoins techniques</li>
                                <li> - Propositions de choix techniques/Architecture</li>
                                <li> - Audit Technique et édition de documentation</li>
                                <li> - Chiffrage/Estimations des difficultés techniques de développements</li>
                                <li> - Relecture et contrôle de la qualité de code du second développeur</li>
                                <li> - Prise en charge de la passation de connaissances pour mon remplaçant</li>
                                <li> - Intégration HTML/CSS</li>

                                <li className="mt-2">Gestion du projet: </li>
                                <li> - Github</li>
                                <li> - Trello</li>
                                <li> - Slack</li>
                                <li className="mt-2">Conception et développement en Javascript:</li>
                                <li> - Utilisation de Visual Studio Code</li>
                                <li> - Développement de batch Shell</li>
                                <li> - Utilisation de NodeJS/ReactJS</li>
                                <li> - Génération d'XML via JSON enregistré dans un FTP pour la réception de Janneau Menuiserie et l'interprétation de leurs ERP</li>

                                <li className="mt-2">Utilisation des Outils AWS:</li>
                                <li> - S3</li>
                                <li> - Route53</li>
                                <li> - Elastic Beanstalk</li>
                                <li> - EC2</li>

                                <li className="mt-2">Développement de Modules côté Menuiserie pour les difficultés métiers de chaque typo de produit:</li>
                                <li> - Module de calcul de Surfaces</li>
                                <li> - Module de calcul de Contraintes</li>
                                <li> - Module de calcul de Limites dimensionnelles</li>
                                <li> - Module de calcul Descente de charges</li>
                                <li> - Module de calcul de Prix</li>
                                <li> - Module de Schéma 2D ( dessiné lors de la sélection du Client/Artisan afin de prévisualiser sa commande)</li>
                            </ul>
                        </div>
                    </div>
                )}
                <div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/{pageMax - 1}</div>
            </>
        )}
    </>
    )
}


export default Content