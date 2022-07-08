import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
import { PATH } from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    return (
        <>
            {/*бэкграунд справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={`${s.sidebar} ${open ? s.open : ''}`}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt='close sidebar'
                        id={'hw5-menu-close'}
                    />
                </button>

                <nav id={'hw5-menu'} className={s.nav}>

                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ''} // делает студент
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ''} // делает студент
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ''} // делает студент
                    >
                        Junior+
                    </NavLink>

                </nav>
            </aside>
        </>
    )
}

