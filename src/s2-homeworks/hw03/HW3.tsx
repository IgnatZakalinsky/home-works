import React, {useState} from 'react'
import {v1} from 'uuid'
import s from './Greeting.module.css'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users, user]) // need to fix
    }

    return (
        <div id={'hw3'} className={s2.hw}>
            <hr/>
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 3</div>

            {/*для автоматической проверки дз (не менять)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW3
