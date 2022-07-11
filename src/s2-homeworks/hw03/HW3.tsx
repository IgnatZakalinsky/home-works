import React, {useState} from 'react'
import {v1} from 'uuid'
import s from './Greeting.module.css'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => {
        // need to fix any
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users, user]) // need to fix
    }

    return (
        <div id={'hw3'}>
            {/*<hr/>*/}
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>Homework #3</div>

            {/*для автоматической проверки дз (не менять)*/}

            {/*<hr />*/}
            {/*можно убрать этот тег*/}
            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>

            {/*<hr />*/}
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW3
