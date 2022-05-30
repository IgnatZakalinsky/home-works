import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUser?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers, lastUser} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div>
                <input
                    id={'hw3-input'}
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}
                />
                <div id={'hw3-error'} className={s.error}>{error}</div>
            </div>

            <button id={'hw3-button'} onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div id={'hw3-users-total'} className={s.count}>{totalUsers}</div>
            {lastUser && (
                <div className={s.greeting}>
                    hello{' '}
                    <span id={'hw3-last-user'}>{lastUser}</span>
                    !
                </div>
            )}
        </div>
    )
}

export default Greeting
