import Head from 'next/head'

import { Container, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container color="white" maxW="3xl">
      <Head>
        <title>Ramin Rezaei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>Ramin Rezaei</Heading>
        <Heading size="md">Front End Developer</Heading>
        <Text>This is excremental</Text>
      </main>
    </Container>
  )
}
