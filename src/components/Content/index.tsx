import React from 'react'
import { PageType } from '../../types';
import CoverContent from './CoverContent/coverContent';
import TimeLineContent from './TimeLineContent';
import ChapterContent from './ChapterContent';
import FormationContent from './FormationContent';


type Props = {
    pageItem: PageType,
    setPageCounter: Function
}

function Content({ pageItem, setPageCounter }: Props) {
    const { isChapter, isTimeLine, isFormation } = pageItem;
  return (
    <>
        {pageItem.cover && (
            <CoverContent pageItem={pageItem} />
        )}

        {!pageItem.cover && (
            <>
                {pageItem.isTimeLine && (
                    <TimeLineContent setPageCounter={setPageCounter} />
                )}
                {pageItem.isChapter && (
                    <ChapterContent pageItem={pageItem} />
                )}
                {pageItem.isFormation && (
                    <FormationContent />
                )}
                {!pageItem.isFormation && !pageItem.isChapter && !pageItem.isTimeLine && (
                    <div className="text-gray-700">
                    <h1>Nom du projet</h1>
                    <p>Stacks</p>
                    <p>Liens github et site si hebergé</p>
                    <p>images</p>
                    </div>
                )}
                <div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/5</div>
            </>
        )}
    </>
    )
}


export default Content