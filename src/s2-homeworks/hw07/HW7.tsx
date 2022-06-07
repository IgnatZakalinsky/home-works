import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'

const arr = [{id: 1, value: 'x'}, {id: 2, value: 'y'}, {id: 3, value: 'z'}] // value может быть изменено

const HW7 = () => {
    const [value, onChangeOption] = useState(1) // селект и радио должны работать синхронно
    console.log(value)

    return (
        <div id={'hw7'} className={s2.hw}>
            <hr/>
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 7</div>

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    id={'hw7-super-select'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    id={'hw7-super-radio'}
                    name={'hw7-radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW7
