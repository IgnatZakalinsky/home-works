import React from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId } from './bll/themeReducer'

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
]

const HW12 = () => {
    const themeId = useSelector((state: any) => state.theme.themeId)
    const theme = themes.find((t) => t.id === themeId)!.value

    const dispatch = useDispatch()
    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>
            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    value={themeId}
                    options={themes}
                    onChangeOption={change}
                />
            </div>
        </div>
    )
}

export default HW12
