import React from 'react'
import Layout from '../../components/Layout'
import Empanada from '../../components/Empanada'

function Menu({children}) {
    return (
        <Layout>
           <div className='product__grid'>
             <h1> Menu </h1>
             <Empanada> {children} </Empanada>
             <Empanada> {children} </Empanada>
             <Empanada > {children} </Empanada>
             <Empanada > {children} </Empanada>
             <Empanada />
             <Empanada />
            </div>
        </Layout>
    )
}

export default Menu
