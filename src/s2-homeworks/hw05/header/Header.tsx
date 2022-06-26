import React, { FC } from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'

type PropsType = {
    open: boolean
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({open, handleOpen}) => {

    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    return (
        <>
            <div id={'hw5-header'} className={s.header}>
                <img src={burgerIcon}
                     id={'hw5-burger-menu'}
                     className={s.burgerMenuIcon}
                     onClick={handleOpen}
                     alt={'open menu'}/>

            </div>

        </>
    )
}

