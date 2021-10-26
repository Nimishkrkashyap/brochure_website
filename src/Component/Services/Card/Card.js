import React from 'react'
import {FaDesktop} from 'react-icons/fa'
import cardStyle from './Card.module.css'

function Card() {
    return (
        <>
            <div className={cardStyle.card}>
                <div className={cardStyle.icon_div}>
                    <FaDesktop className={cardStyle.icon}/>
                </div>
                <h2 className={cardStyle.heading}>
                Web And Graphic Design
                </h2>
                <p className={cardStyle.para}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                </p>
            </div>
        </>
    )
}

export default Card;