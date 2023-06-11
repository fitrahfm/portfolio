import { FunctionComponent } from "react"
import Link from "next/link"

interface IProps {
  name: string,
  url: string
}

const Nav: FunctionComponent<IProps> = ({name, url}) => {
  return <Link href={url}>{name}</Link>
}

export default Nav;