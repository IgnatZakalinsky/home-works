import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', 0))) // for autotests
    const [show, setShow] = useState<boolean>(false)

    const stop = () => { // пишут студенты
        if (timerId) {
            clearInterval(timerId)
            setTimerId(undefined)
        }
    }
    const start = () => { // пишут студенты
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    // логику напишет Андрей :)                                                                     // |v| видел такое в реальных часах |v|
    const stringTime = date?.toLocaleTimeString() || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = date?.toLocaleDateString() || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    // день недели на английском, месяц на английском
    const stringDay = 'Monday' || <br/> // пишут студенты
    const stringMonth = 'May' || <br/> // пишут студенты

    return (
        <div>
            <div
                id={'hw9-watch'}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div id={'hw9-day'}>{stringDay}</div>
                <div id={'hw9-time'}>{stringTime}</div>
            </div>

            <div id={'hw9-more'}>
                {show ? (
                    <>
                        <div id={'hw9-month'}>{stringMonth}</div>
                        <div id={'hw9-date'}>{stringDate}</div>
                    </>
                ) : (
                    <>
                        <br/>
                        <br/>
                    </>
                )}
            </div>


            <SuperButton
                id={'hw9-button-start'}
                disabled={!timerId} // пишут студенты
                onClick={start}
            >
                start
            </SuperButton>
            <SuperButton
                id={'hw9-button-stop'}
                disabled={!!timerId} // пишут студенты
                onClick={stop}
            >
                stop
            </SuperButton>
        </div>
    )
}

export default Clock
