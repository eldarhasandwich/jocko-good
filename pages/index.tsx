import * as React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Good from '../Components/Good'

interface Props {
  url: string
}

const Home: React.FC<Props> = (props) => {

  const url = props.url

  console.log({url})

  const goodThing = url.charAt(0).toUpperCase() + url.slice(1)
  const goodText = url != "/" ?`${goodThing}? Good.` : 'Good.'

  return (
    <>
      <Head>
        <title>{ goodText }</title>
        <link rel="icon" href="/jocko.png" />

        <style> { `html { background-color: black; }` } </style>
      </Head>

      <Good
        goodText={goodText}
      />

    </>    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let url: string
  if (req) {
    url = req.url
  } else {
    url = window.location.hostname
  }

  return { props: { url } }
}

export default Home
