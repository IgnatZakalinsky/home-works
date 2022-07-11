import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
    return (
        <div id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
            <span id={'hw8-user-name-' + u._id}>{u.name}</span>
            <span id={'hw8-user-age-' + u._id}>{u.age}</span>
        </div>
    )
}

export default User
