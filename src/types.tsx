export type PageType = {
    cover?: boolean,
    isTimeLine?: boolean,
    isChapter?: boolean,
    index: number,
    chapterIndex?: number,
    automaticWords?: string | null,
    content?: string,
    isFormation?: boolean
}

export type TranslatedArr = [{
    content?: string,
    content1?: string,
    content2?: string,
    content3?: string,
    title?: string,
    date?: string,
}];