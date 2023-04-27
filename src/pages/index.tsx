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

  return {
    props: {
      data
    },
    revalidate: 60 // In seconds
  }
}

export default Main
