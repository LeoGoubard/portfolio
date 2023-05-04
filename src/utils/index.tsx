import { PageType } from '../types';


export const pages: PageType[] = [
    {
      isCover: true,
      index: 0,
    },
    {
      content: 'Page1',
      index: 1,
      isTimeLine: true
    },
    {
      content: 'Page 2',
      isChapter: true,
      chapterIndex: 0,
      index: 2
    },
    {
      content: 'Page 3',
      index: 3,
      isFormation: true,
      formationContent: [
        {
            alt: "apprendre",
            image: "https://zupimages.net/up/23/16/0gol.jpg",
            translations: {
                title: "learn",
                content: "learnContent"
            }
        },
        {
            alt: "concevoir",
            image: "https://zupimages.net/up/23/16/9spb.jpg",
            translations: {
                title: "build",
                content: "buildContent"
            }
        },
        {
            alt: "developper",
            image: "https://zupimages.net/up/23/16/b9nq.jpg",
            translations: {
                title: "dev",
                content: "devContent"
            }
        },
    ],
    },
    {
      content: 'Page 5',
      index: 4,
      isProject: true,
      projectIndex: 0
    },
    {
      content: 'Page 5',
      index: 5,
      isProject: true,
      projectIndex: 1
    },
    {
      content: 'Page 5',
      index: 6,
      isProject: true,
      projectIndex: 2
    },
    {
      content: 'Page 5',
      index: 7,
      isProject: true,
      projectIndex: 3
    },
    {
      content: 'Page 4',
      index: 8,
      isChapter: true,
      chapterIndex: 1
    },
    {
      content: 'Page 5',
      index: 9,
      isExperience: true,
      experienceIndex: 0
    },
    {
      content: 'Page 5',
      index: 10,
      isProject: true,
      projectIndex: 4
    },
    {
      content: 'Page 4',
      index: 11,
      isProject: true,
      projectIndex: 5
    },
    {
      content: 'Page 5',
      index: 12,
      isExperience: true,
      experienceIndex: 1
    },
  ]