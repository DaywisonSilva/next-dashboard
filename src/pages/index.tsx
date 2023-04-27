import { Button } from '@/components/atoms'
import { getHomeData } from '@/services/getHomeData.service'

import type { Data } from '../services/getHomeData.service'
import Card from '@/components/molecules/Card'

const Main = ({ data }: { data: Data }) => {
  return (
    <main className='flex justify-center items-center h-screen'>
      {data.cards.map((card) => {
        return (
          <Card
            src={card.profile.url}
            roles={card.role}
            key={card.profile.url}
          />
        )
      })}
    </main>
  )
}

export async function getStaticProps() {
  const data = await getHomeData()
  console.log(JSON.stringify(data))
  // const posts = await res.json()

  return {
    props: {
      data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600 // In seconds
  }
}

export default Main
