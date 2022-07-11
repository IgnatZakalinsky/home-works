import React from 'react'
import HW2 from '../s2-homeworks/hw02/HW2'
import HW3 from '../s2-homeworks/hw03/HW3'
import HW4 from '../s2-homeworks/hw04/HW4'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
// import HW2 from '../s2-homeworks/hw02/HW2'
// import HW3 from '../s2-homeworks/hw03/HW3'
// import HW4 from '../s2-homeworks/hw04/HW4'
import HW5 from '../s2-homeworks/hw05/HW5'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
    const themeId = useSelector((state: any) => state.theme.themeId)
    useEffect(() => {
        document.documentElement.dataset.theme = themeId
    }, [themeId])
    return (
        <div className={s.App} data-theme={themeId}>
            {/*<div>react homeworks:</div>*/}

            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}

            <HW5 />
        </div>
    )
}

export default App
