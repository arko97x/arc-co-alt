import Head from "next/head"
import Footer from "../components/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Arkoprabho Bhattacharjee | Digital Product Designer & Developer</title>
        <meta name="description" content="Arkoprabho Bhattacharjee's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-screen min-h-screen">
        <Footer />
      </main>
    </>
  )
}
