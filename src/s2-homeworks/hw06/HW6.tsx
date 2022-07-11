import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

const HW6 = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        // делают студенты
        setValue(restoreState<string>('hw6-editable-span-value', ''))
    }

    return (
        <div id={'hw6'}>
            {/*<hr />*/}
            {/*можно убрать этот тег*/}
            <div className={s2.hwTitle}>Homework #6</div>

            {/*should work (должно работать)*/}
            <div className={s2.hw}>
                <div>
                    <SuperEditableSpan
                        id={'hw6-spanable-input'}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{
                            children: value ? undefined : 'enter text...',
                            id: 'hw6-editable-span',
                        }}
                    />
                </div>
                <div className={s.buttonsContainer}>
                    <SuperButton id={'hw6-save'} onClick={save}>
                        save to ls
                    </SuperButton>
                    <SuperButton
                        id={'hw6-restore'}
                        onClick={restore}
                        xType={'secondary'}
                    >
                        get from ls
                    </SuperButton>
                </div>
            </div>
            {/*<hr />*/}
            {/*можно убрать этот тег*/}
            {/*<hr />*/}
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW6
