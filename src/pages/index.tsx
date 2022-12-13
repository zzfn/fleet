import Head from 'next/head'
import NavCard from "../components/NavCard";
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then((res) => res.json())
export default function Home() {
    const { data } = useSWR('https://gateway.zzfzzf.com/nav/list', fetcher)

    return (
    <>
      <Head>
        <title>Fleet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-3 gap-4'>
          {
              data?.data.map((item: any)=><NavCard key={item.url} record={item}/>)
          }
      </main>
    </>
  )
}
