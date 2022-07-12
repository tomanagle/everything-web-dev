import { Title } from "@mantine/core"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Everything Web Dev All At Once</title>
        <meta name="description" content="Everything Web Dev All At Once" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Everything Web Dev All At Once</Title>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
