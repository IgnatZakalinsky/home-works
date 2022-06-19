import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'

const HW13 = () => {
    const [answer, setAnswer] = useState('')
    const [info, setInfo] = useState('')

    const send = (x?: boolean) => () => {
        setAnswer('...loading')
        setInfo('...loading')
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: x})
            .then(res => {
                setAnswer(res.data.errorText)
                setInfo(res.data.info)
            })
            .catch(e => {
                setAnswer(e.response.data.errorText)
                setInfo(e.response.data.info)
            })
    }

    return (
        <div id={'hw13'} className={s2.hw}>
            <hr/>
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

            <div id={'hw13-answer'}>
                {answer}
            </div>
            <div id={'hw13-info'}>
                {info}
            </div>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW13
