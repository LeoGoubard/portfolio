/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from "../components/About";
import image from "../assets/desert.jpg"
import Page from '../components/Page';
import { PageType } from '../types';


const Home = () => {
  
  const pages: PageType[] = [
    {
      cover: true,
      index: 0,
      automaticWords: ["Javascript developer 1.7 years of experience", "For my love of Cinema and Literature"]
    },
    {
      cover: false,
      content: 'Page1',
      index: 1
    },
    {
      cover: false,
      content: 'Page 2',
      index: 2
    },
    {
      cover: false,
      content: 'Page 3',
      index: 3
    },
    {
      cover: false,
      content: 'Page 4',
      index: 4
    },
    {
      cover: false,
      content: 'Page 5',
      index: 5
    }
  ]
  
  const [pageCounter, setPageCounter] = useState({ value1: 0, value2: 0, min: 0, max: pages.length + 1})

  return (
    <div className="bg-[rgb(36,36,36)] text-white flex flex-col font-poppins justify-center h-screen">
      <Head>
        <title>Leo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center" >
        <About />
      </section> */}
      <div className="flex flex-1 justify-center items-center h-screen">
        <div className="h-5/6 mr-5 flex">
          <div className="flex items-center w-9 pt-5 pb-5 flex-col text-black justify-between bg-red-500">
            <p className="rotate-m90">©2023</p>
            <p className="truncate rotate-m90">Leo Goubard</p>
            <p className="rotate-m90 truncate mb-12">Javascript developer</p>
          </div>
        </div>
        {pages[pageCounter.value1] && (
          <Page key={pages[pageCounter.value1].index} setPageCounter={setPageCounter} pageItem={pages[pageCounter.value1]}/>
        )}
        {pages[pageCounter.value2] && pageCounter.value1 !== 0 &&  (
          <>
            <div className="h-5/6 w-3 bg-gradient-to-r from-slate-100  via-[rgb(166,165,165)] to-slate-100 ">
            </div>
            <Page key={pages[pageCounter.value2].index} setPageCounter={setPageCounter} pageItem={pages[pageCounter.value2]}/>
          </>
        )}{/* 
        {pages.map((pageItem) => (
          <Page key={pageItem.index} setPageCounter={setPageCounter} pageItem={pageItem}/>
        ))} */}
        {/* <Page setPageCounter={setPageCounter} pageCounter={pageCounter} first/>
        {pageCounter > 0 && (
          <Page setPageCounter={setPageCounter} pageCounter={pages.indexOf()}/>
        )} */}
      </div>
    </div>
  )
}

export default Home;