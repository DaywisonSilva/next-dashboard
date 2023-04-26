import { API } from '@/providers/grapqhql-api'
import { gql } from 'graphql-request'

const query = gql`
  {
    cards {
      id
      name
      role
      profile {
        url
      }
    }
  }
`

interface Data {
  cards: {
    id: string
    name: string
    role: string[]
    profile: {
      url: string
    }
  }[]
}

const getHomeData = async () => {
  const data = await API.request<Data>(query)

  return data
}

export { getHomeData }
export type { Data }
