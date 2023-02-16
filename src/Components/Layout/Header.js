//1. Import Area
import React, { Component } from 'react'
import Nav from './Nav'

//2. Defination Area
//This time use class defination area
export default class Header extends Component {
    //1. properties

    //2. Constructor

    //3. Method
    render(){
        //Every method/function should be return something
        return (
            <header>
                <div className='container'>
                     <Nav />
                </div>            
            </header>
        )
    }
}

//3. 