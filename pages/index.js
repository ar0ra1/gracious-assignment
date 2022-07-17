import Head from "next/head";
import { fetcher, BASE_QUERY } from "../lib/useGraphQLRequest";
import { SWRConfig } from "swr";
import { Wrapper } from "../components/Wrapper";

export async function getServerSideProps() {
  const allData = await fetcher(BASE_QUERY);
  return {
    props: {
      fallback: {
        [BASE_QUERY]: allData,
      },
    },
  };
}

export default function Home({ fallback }) {
  return (
    <>
      <Head>
        <title>Gracious Assignment - Akash Arora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-rmBG min-h-[calc(100vh_-_6vh)]">
        <nav className="flex items-center justify-center p-5 shadow-md bg-rmRed">
          <h1 className="text-2xl text-white">Rick and Morty</h1>
        </nav>
        <SWRConfig value={{ fallback }}>
          <Wrapper />
        </SWRConfig>
      </main>

      <footer className="flex p-5 text-white justify-evenly bg-rmRed">
        <a href="" target="_blank" rel="nofollow noreferrer">
          GitHub
        </a>
        <p>By Akash Arora</p>
      </footer>
    </>
  );
}
