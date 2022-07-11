import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error)
        if (typeof error.response === 'undefined') {
            console.log(error)
        }
        return Promise.reject(error)
    }
)
const HW13 = () => {
    const [answer, setAnswer] = useState('')
    const [info, setInfo] = useState('')

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc'
                : 'https://neko-cafe-back.herokuapp.com/auth/test'

        setAnswer('...loading')
        setInfo('...loading')
        axios
            .post(url, { success: x })
            .then((res) => {
                setAnswer(res.data.errorText)
                setInfo(res.data.info)
            })
            .catch((e) => {
                console.log(e)
                setAnswer(e.response?.data?.errorText || e.message)
                setInfo(e.response?.data?.info || e.name)
            })
    }

    return (
        <div id={'hw13'} className={s2.hw}>
            <hr />
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>homeworks 13</div>

            {/*для автоматической проверки дз (не менять)*/}
            <SuperButton
                id={'hw13-send-true'}
                onClick={send(true)}
                disabled={answer === '...loading'}
            >
                send true
            </SuperButton>
            <SuperButton
                id={'hw13-send-false'}
                onClick={send(false)}
                disabled={answer === '...loading'}
            >
                send false
            </SuperButton>
            <SuperButton
                id={'hw13-send-undefined'}
                onClick={send(undefined)}
                disabled={answer === '...loading'}
            >
                send undefined
            </SuperButton>
            <SuperButton
                id={'hw13-send-null'}
                onClick={send(null)}
                disabled={answer === '...loading'}
            >
                send null
            </SuperButton>

            <div id={'hw13-answer'}>{answer}</div>
            <div id={'hw13-info'}>{info}</div>

            <hr />
            {/*можно убрать этот тег*/}
            <hr />
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW13
