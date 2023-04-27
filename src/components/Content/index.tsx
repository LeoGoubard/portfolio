import React from 'react'
import { PageType } from '../../types';
import CoverContent from './CoverContent/coverContent';
import TimeLineContent from './TimeLineContent';
import ChapterContent from './ChapterContent';
import FormationContent from './FormationContent';
import ProjectContent from './ProjectContent';
import ExperienceContent from './ExperienceContent';

type Props = {
    pageItem: PageType,
    setPageCounter: Function
    pageMax: number
}

function Content({ pageMax, pageItem, setPageCounter }: Props) {
    const { isChapter, isTimeLine, isFormation, isCover, isProject, projectIndex, isExperience, experienceIndex, } = pageItem;
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
                    <ExperienceContent experienceIndex={experienceIndex} />
                )}
                <div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/{pageMax}</div>
            </>
        )}
    </>
    )
}


export default Content