import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages'
import s from './Header.module.css'

function Header() {
    const [isShow, setShow] = useState(false)

    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    return (
        <div id={'hw5-header'} className={s.header + ' ' + (isShow ? s.showMenu : s.hideMenu)}>
            {isShow && (
                <div id={'hw5-menu'} className={s.menu}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        className={({isActive}) => isActive ? s.active : s.link} // делает студент
                    >
                        pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        className={({isActive}) => isActive ? s.active : s.link} // делает студент
                    >
                        junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        className={({isActive}) => isActive ? s.active : s.link} // делает студент
                    >
                        junior+
                    </NavLink>
                </div>
            )}

            <div id={'hw5-burger-menu'} className={s.burgerMenu} onClick={() => setShow(!isShow)}/>
        </div>
    )
}

export default Header
