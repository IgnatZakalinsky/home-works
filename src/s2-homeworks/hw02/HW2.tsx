import React, { useState } from 'react'
import Affairs from './Affairs'
import s2 from '../../s1-main/App.module.css'

// types
export type AffairPriorityType = any // need to fix any
export type AffairType = {
    _id: any // need to fix any
    name: any // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: any = [ // need to fix any
    { _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: any, filter: any): any => { // need to fix any
    if (filter !== 'all') return affairs.filter((a: AffairType) => a.priority === filter)

    return affairs // need to fix
}
export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any

    return affairs.filter((a: AffairType) => a._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: any) => // need to fix any
        setAffairs(deleteAffair(affairs, _id))

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
