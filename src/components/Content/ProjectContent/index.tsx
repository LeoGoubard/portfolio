/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from "react-i18next";
import { ProjectType } from '../../../types';

type Props = {
    projectIndex?: number
}

const ProjectContent = ({ projectIndex }: Props) => {
    const { t } = useTranslation();
    const projetcs: ProjectType  = t('projects', { returnObjects: true });
    const { image, title, description, web, github, stacks } = projetcs[projectIndex || 0];

    return (
        <div className="text-gray-700 border-4 h-full border-gradient-to-r from-[rgb(166,165,165)] to-[#F9F9F9] items-center flex flex-col">
            <img className="h-30 w-50" src={image} alt=""/>
            <div className="flex justify-start flex-col w-full m-2">
                <div className="flex flex-row">
                    <a href={github} target="_blank" className="z-30 w-5 h-5 m-2"><img src="https://zupimages.net/up/23/16/ihiu.png" alt="" /></a>
                    {web && (<a href={web} target="_blank" className="z-30 w-5 h-5 m-2"><img src="https://zupimages.net/up/23/16/vxbf.png" alt="" /></a>)}
                </div>
                <h1 className="text-2xl font-semibold m-2">{title}</h1>
                <p className="text-sm m-2">{description}</p>
                <p className="text-sm m-2 font-bold">{stacks}</p>
            </div>
        </div> 
    )
}

export default ProjectContent;