//1. Import Area
import React from 'react'

//2. Defination Area
//Function Defination Area
export default function Aside(props) {
  //Every method/function return something
  return (
    <aside className={`col-2 ${props.cls} tbdr`}>{props.children}</aside>
        )
    }
