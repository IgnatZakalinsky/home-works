import React from 'react'
import s from './Error404.module.css'

const Error404 = () => {
    return (
        <div id={'hw5-page-404'}>
            <div className={s.wrapper}>
                <span className={s.error404}>404</span>
            </div>
        </div>
    )
}

export default Error404
