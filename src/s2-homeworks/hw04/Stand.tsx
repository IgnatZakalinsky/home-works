import React, {useState} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from "./common/c2-SuperButton/SuperButton";

const Stand = () => {
    const [stateForAllInputs, setValue] = useState('')
    const [error, setError] = useState<undefined | string>(undefined)

    const [stateForAllCheckboxes, setChecked] = useState(false)

    return (
        <div className={s.stand}>
            <div className={s.inputs}>
                инпут с ошибкой:
                <div>
                    <SuperInputText
                        id={'super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        error={error}
                        onEnter={() => {
                            setError(stateForAllInputs.trim() ? undefined : 'some error')
                            setValue('')
                        }}
                    />
                </div>
                совместим со старым кодом
                <div>
                    <SuperInputText
                        id={'super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={e => setValue(e.currentTarget.value)}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                обычная кнопка:
                <div>
                    <SuperButton id={'super-button-default'}>default</SuperButton>
                </div>
                красная кнопка:
                <div>
                    <SuperButton id={'super-button-red'} xType={'red'}>red</SuperButton>
                </div>
                задизэйбленная кнопка:
                <div>
                    <SuperButton id={'super-button-disabled'} xType={'red'} disabled>disabled</SuperButton>
                </div>

            </div>

            <div className={s.checkboxes}>
                чекбокс с текстом:
                <div>
                    <SuperCheckbox
                        id={'super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                совместим со старым кодом
                <div>
                    <SuperCheckbox
                        id={'super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={e => setChecked(e.currentTarget.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
