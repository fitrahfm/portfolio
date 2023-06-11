import { FunctionComponent, ReactNode } from "react"
import Link from "next/link"

interface IProps {
  main: ReactNode,
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return <div className="mx-12 h-28 px-8 py-6">{main}</div>
}

export default Layout