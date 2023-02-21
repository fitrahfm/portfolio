import Layout from "src/components/layout"
import { useQuery, gql } from "@apollo/client";

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

export default function Home() {
  const {data} = useQuery(BASIC_QUERY);
  console.log(data);
  return <Layout main={<div>Home</div>} />
}