//1. Import Area
import React, { Component } from 'react'

//2. Defination Area
// Class Defination Area
export default class Section extends Component {
    //1. Properties

    //2. Constructor

    //3. Methods
    render() {
        //Every method/function should be return
        return (
            <section className='col-8 tbdr'>{this.props.children}</section>
        )
    }
}