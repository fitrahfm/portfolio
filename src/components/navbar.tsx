import { FunctionComponent } from "react"
import Nav from "./nav"

interface Nav {
  name: string,
  url: string
}

interface IProps {
  menu: {
    left: Array<Nav>,
    right: Array<Nav>
  }
}

const NavBar: FunctionComponent<IProps> = ({menu}) => {
  const {left, right} = menu
  console.log('left', left)
  console.log('right', right)
  return (
    <div className="h-full bg-gray-800">
      {(() => {
        let result = [];
        for (let {name, url} of left) {
          result.push(<Nav name={name} url={url}></Nav>)
        }
        return result;
      })()}
    </div>
  )
}

export default NavBar;