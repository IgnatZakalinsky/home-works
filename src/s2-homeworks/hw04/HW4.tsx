import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

const HW4 = () => {
    return (
        <div id={'hw4'}>
            <div className={s2.hwTitle}>Homework #4</div>
            {/*<hr />*/}
            {/*проверка отображения*/}
            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <Stand />
            </div>

            <hr />
            {/*можно убрать этот тег*/}
            {/*<hr/>*/}
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW4
