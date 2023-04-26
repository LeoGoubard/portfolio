export type PageType = {
    index: number,
    chapterIndex?: number,
    automaticWords?: string | null,
    content?: string,
    isCover?: boolean,
    isChapter?: boolean,
    isTimeLine?: boolean,
    isFormation?: boolean,
    isProject?: boolean,
    projectIndex?: number,
    ExperienceIndex?: number,
    isExperience?: boolean
}

export type TranslatedArr = [{
    content?: string,
    content1?: string,
    content2?: string,
    content3?: string,
    title?: string,
    date?: string
}];

export type ProjectType = [{
    image: string,
    title: string,
    description: string,
    web?: string,
    github: string,
    stacks: string
}]