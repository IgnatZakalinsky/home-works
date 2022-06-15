import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import s from './HW8.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import User from './User'

export type UserType = { // need to fix any
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [ // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

const HW8 = () => {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((u: UserType) => <User key={u._id} u={u}/>)

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'})) // в алфавитном порядке a.name > b.name
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'})) // в обратном порядке a.name < b.name
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18})) // совершеннолетние

    return (
        <div id={'hw3'} className={s2.hw}>
            <hr/>
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 8</div>

            <div id={'hw8-users'}>
                {finalPeople}
            </div>

            <div>
                <SuperButton id={'hw8-button-up'} onClick={sortUp}>sort up</SuperButton>
                <SuperButton id={'hw8-button-down'} onClick={sortDown}>sort down</SuperButton>
                <SuperButton id={'hw8-button-18'} onClick={check18}>check 18</SuperButton>
            </div>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW8
