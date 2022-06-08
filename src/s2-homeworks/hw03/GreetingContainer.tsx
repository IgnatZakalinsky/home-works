import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any // нельзя пробелы перед и после имени, можно в середине
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        const trimmedName = name.trim()

        if (trimmedName) {
            addUserCallback(trimmedName) // need to fix
        } else {
            setError('name is require!')
        }
        setName('')
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (name) {
                addUser()
            } else {
                setError('name is require!')
            }
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUser={users[users.length - 1]?.name}
        />
    )
}

export default GreetingContainer
