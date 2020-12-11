import { FC } from 'react'
import Head from 'next/head'

import Template from '../components/Template'

const Home: FC = () => {
  return (
    <Template>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className="text-gray-700 text-xl text-center mt-2">
        Hello from Next JS + <span className="text-green-600">Tailwind</span>
      </h1>
    </Template>
  )
}
export default Home
