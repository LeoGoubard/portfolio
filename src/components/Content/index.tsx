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
}

function Content({ pageItem, setPageCounter }: Props) {
    const { isChapter, isTimeLine, isFormation, isCover, isProject, projectIndex} = pageItem;
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
                    <FormationContent />
                )}
                {isProject && (
                    <ProjectContent projectIndex={projectIndex}/>
                )}
                
                <div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/5</div>
            </>
        )}
    </>
    )
}


export default Content