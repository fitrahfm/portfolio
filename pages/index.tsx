import { useQuery, gql } from "@apollo/client"
import Layout from "@/components/layout"
import NavBar from "@/components/navbar"

const BASIC_QUERY = gql`
  query GetBasics {
    basics {
      data {
        attributes {
          first_name
        }
      }
    }
  }
`

const NavBarMenu = {
  left: [{
    name: 'test 1',
    url: 'test-1'
  }, {
    name: 'test 2',
    url: 'test-2'
  }],
  right: [{
    name: 'test 3',
    url: 'test-3'
  }],
}

export default function Home() {
  const {data} = useQuery(BASIC_QUERY)
  console.log(data)
  return <Layout main={
    <NavBar menu={NavBarMenu} />
  }></Layout>
}