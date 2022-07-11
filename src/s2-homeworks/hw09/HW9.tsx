import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'

const HW9 = () => {
    return (
        <div id={'hw9'} className={s2.hw}>
            <hr />
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 9</div>

            {/*should work (должно работать)*/}
            <Clock />

            <hr />
            {/*можно убрать этот тег*/}
            <hr />
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW9
