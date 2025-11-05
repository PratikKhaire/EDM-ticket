import Head from 'next/head'
import React from 'react'
import { Header } from './section/header'
import { Hero } from './section/Hero'

const page = () => {
  return (
    <div className="font-sora">
      <Header/>
      <Hero/>
    </div>
  )
}

export default page