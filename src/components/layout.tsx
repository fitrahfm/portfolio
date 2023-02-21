import { FunctionComponent, ReactNode } from "react"
import Link from "next/link"

interface IProps {
  main: ReactNode,
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return <div>{main}</div>
}

export default Layout