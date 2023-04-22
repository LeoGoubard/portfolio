export type PageType = {
    cover?: boolean,
    timeLine?: boolean,
    chapter?: boolean,
    index: number,
    chapterIndex?: number,
    automaticWords?: string | null,
    content?: string
}

export type TranslatedArr = [{
    content?: string,
    title?: string,
    date?: string,
}];