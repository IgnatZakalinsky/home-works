import React, { SetStateAction, Dispatch } from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: any // AffairType[]
    setFilter: any // (filter: FilterType) => void
    // setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: any // (id: number) => void
    filter: any // FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all') // создаёт студент
    } // need to fix
    const setHigh = () => {
        props.setFilter('high') // создаёт студент
    }
    const setMiddle = () => {
        props.setFilter('middle') // создаёт студент
    }
    const setLow = () => {
        props.setFilter('low') // создаёт студент
    }
    // const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     props.setFilter(e.currentTarget.value as FilterType)
    // }

    const cnAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const cnHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const cnMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const cnLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')
    // const setClass = (filter: FilterType) => {
    //     return s.button + (props.filter === filter ? ' ' + s.active : '')
    // }

    return (
        <div>

            {mappedAffairs}

            <button id={'hw2-button-all'} onClick={setAll} className={cnAll}>All</button>
            <button id={'hw2-button-high'} onClick={setHigh} className={cnHigh}>High</button>
            <button id={'hw2-button-middle'} onClick={setMiddle} className={cnMiddle}>Middle</button>
            <button id={'hw2-button-low'} onClick={setLow} className={cnLow}>Low</button>

            {/*<button onClick={set} className={setClass('all')} value={'all'}>All</button>*/}
            {/*<button onClick={set} className={setClass('high')} value={'high'}>High</button>*/}
            {/*<button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>*/}
            {/*<button onClick={set} className={setClass('low')} value={'low'}>Low</button>*/}
        </div>
    )
}

export default Affairs
