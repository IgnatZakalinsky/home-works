import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

const HW4 = () => {
    return (
        <div id={'hw4'} className={s2.hw}>
            <hr/>
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 4</div>

            {/*проверка отображения*/}
            демострация возможностей компонент:
            <Stand/>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW4
