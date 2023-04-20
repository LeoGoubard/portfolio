/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageType } from '../../types';
import CoverContent from './coverContent';
import TimeLineContent from './TimeLineContent';

type Props = {
    pageItem: PageType
}

function Content({ pageItem }: Props) {

  return (
    <>
        {pageItem.cover && (
            <CoverContent pageItem={pageItem} />
        )}
        {pageItem.timeLine && (
            <TimeLineContent pageItem={pageItem} />
        )}
        {!pageItem.cover && (<div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/5</div>)}
    </>
    )
}


export default Content