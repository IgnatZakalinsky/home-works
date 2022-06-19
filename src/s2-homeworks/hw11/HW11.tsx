import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'

function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (values: [number, number]) => {
        value1 !== values[0] && setValue1(values[0])
        value2 !== values[1] && setValue2(values[1])
    }

    return (
        <div id={'hw11'} className={s2.hw}>
            <hr/>
            {/*можно убрать этот тег*/}

            {/*should work (должно работать)*/}
            <div>
                <span id={'hw11-value'} style={{display: 'inline-block', width: 32}}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span id={'hw11-value-1'} style={{display: 'inline-block', width: 32}}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={change}
                />
                <span id={'hw11-value-2'} style={{display: 'inline-block', width: 32}}>{value2}</span>
            </div>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW11
