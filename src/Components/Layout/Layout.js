//1. Import Area
import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

//2. Defination Area
export default function Layout(props) {
    // Every function return something
    return (
        <> 
           <Header />
              <main>
                <div className='container h-100 s_cont'>
                  <div className='row'>
                      <Aside cls="s_leftaside">Left Aside</Aside>
                      {props.children}
                      <Aside cls="s_rightaside">Right Aside</Aside>
                  </div>               
                </div>
              </main>
            <Footer />
        </>  
    )
}