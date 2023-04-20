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

        {!pageItem.cover && (
            <>
                {pageItem.timeLine && (
                    <TimeLineContent />
                )}
                {!pageItem.timeLine && (
                    <h1 className="text-lg font-semibold text-center text-black">Experience Professionnel</h1>
                )}
                <div className="text-black absolute flex text-xs justify-end bottom-0 right-2">{pageItem.index}/5</div>
            </>
        )}
    </>
    )
}


export default Content