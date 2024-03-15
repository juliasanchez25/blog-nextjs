'use client'

import { PropsWithChildren } from 'react'
import { Sidebar } from './sidebar/sidebar'
import { Aside } from './aside'
import Head from 'next/head'

type Props = PropsWithChildren

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Explore histórias. Inspire-se em um único lugar.
"
        />
        <meta property="og:title" content="Blog" />
        <meta
          property="og:description"
          content="Explore histórias. Inspire-se em um único lugar.
"
        />
        <meta property="og:url" content="https://blog.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-5 w-full">
        <Sidebar />
        <div className="w-full p-6 pt-10">{children}</div>
        <Aside />
      </div>
    </>
  )
}
