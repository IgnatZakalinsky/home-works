import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import { Slider } from '@mui/material'

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
        <div id={'hw11'} className={s2.hw}>
            <hr />
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 11</div>

            {/*should work (должно работать)*/}
            <div>
                <span
                    id={'hw11-value'}
                    style={{ display: 'inline-block', width: 32 }}
                >
                    {value1}
                </span>
                <Slider
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChange={change}
                    sx={{ width: '160px' }}
                />
            </div>

            <div>
                <span
                    id={'hw11-value-1'}
                    style={{ display: 'inline-block', width: 32 }}
                >
                    {value1}
                </span>
                <Slider
                    value={[value1, value2]}
                    onChange={change}
                    sx={{ width: '160px' }}
                />
                <span
                    id={'hw11-value-2'}
                    style={{ display: 'inline-block', width: 32 }}
                >
                    {value2}
                </span>
            </div>

            <hr />
            {/*можно убрать этот тег*/}
            <hr />
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW11
