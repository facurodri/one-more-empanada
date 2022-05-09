import React from 'react'

function Empanada() {
    return (
        <div className="menu__card">
            <img src={"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=750&h=375&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd17%2Fempanadas-a100668%2Fempanadas-a100668_horiz.jpg%3Fitok%3DWbDB4jCT"} alt="" className="menu__img"/>
            <div className='empanada__content'>
                <h2 className='empa__title'>Title: Carne</h2>
                <p className='empa__price'> $3.50</p>
                <p className='empa__description'>Description: Beef</p>
            </div>
        
        </div>
    )
}

export default Empanada
