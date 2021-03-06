import React from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'

const themes = [
    {id: 1, value: 'dark'},
    {id: 2, value: 'red'},
    {id: 3, value: 'some'},
]

const HW12 = () => {
    const themeId = useSelector((state: any) => state.theme.themeId)
    const theme = themes.find(t => t.id === themeId)!.value

    const dispatch = useDispatch()
    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }

    return (
        <div id={'hw12'} className={s2.hw + ' ' + s[theme]}>
            <hr/>
            {/*можно убрать этот тег*/}

            <div id={'hw12-text'} className={s2.hwTitle + ' ' + s[theme + '-text']}>homeworks 12</div>
            <SuperSelect
                id={'hw12-select-theme'}
                value={themeId}
                options={themes}
                onChangeOption={change}
            />

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW12
