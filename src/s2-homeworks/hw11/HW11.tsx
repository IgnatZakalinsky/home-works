import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(
        restoreState<number>('hw11-value2', 100)
    )

    const change = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        } else {
            setValue1(newValue)
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            {/*should work (должно работать)*/}
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'}>{value1}</span>
                        <SuperRange
                            // сделать так чтоб value1 изменялось
                            value={value1}
                            onChange={change}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'}>{value1}</span>
                        <SuperRange
                            value={[value1, value2]}
                            onChange={change}
                        />
                        <span id={'hw11-value-2'}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11