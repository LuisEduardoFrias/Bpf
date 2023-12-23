"use client"
//
import Link from "next/link";
import "./menu.css"

export type OptionMenu = {
 name: string,
 link?: string,
 callback?: (event:any) => void,
}

interface IMenuProps {
 optionsMenu: OptionMenu[]
}

export default function Menu(props: IMenuProps) {
 return (
 <div className={`menu-container_ ${props.className}`}>
  { 
   props.optionsMenu.map((obj, i) =>
     <button key={i} className="link" onClick={obj.callback} >
      <Link href={obj.link ?? "#"} >
      {obj.name}
      </Link>
     </button>)
  }
 </div>)
}