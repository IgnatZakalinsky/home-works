import React from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
import HW2 from '../s2-homeworks/hw02/HW2'

function App() {
    // для дз 12
    // const themeId = useSelector((state: any) => state.theme.themeId)
    // useEffect(() => {
    //     document.documentElement.dataset.theme = themeId
    // }, [themeId])

    return (
        <div
            className={s.App}
            // data-theme={themeId} // для дз 12
        >
            <HW1/>
            <HW2/>
            {/*<HW3/>*/}
            {/*<HW4/>*/}

            {/*<HW5/>*/}
        </div>
    )
}

export default App