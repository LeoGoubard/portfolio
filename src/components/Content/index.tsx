/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { PageType } from '../../types';
import CoverContent from './CoverContent/coverContent';
import TimeLineContent from './TimeLineContent';
import ChapterContent from './ChapterContent';

type Props = {
    pageItem: PageType,
    setPageCounter: Function
}

function Content({ pageItem, setPageCounter }: Props) {
  return (
    <>
        {pageItem.cover && (
            <CoverContent pageItem={pageItem} />
        )}

        {!pageItem.cover && (
            <>
                {pageItem.timeLine && (
                    <TimeLineContent setPageCounter={setPageCounter} />
                )}
                {pageItem.chapter && (
                    <ChapterContent pageItem={pageItem} />
                )}
                <div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/5</div>
            </>
        )}
    </>
    )
}


export default Content