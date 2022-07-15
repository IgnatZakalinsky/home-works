import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

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
    const [image, setImage] = useState('')
    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc'
                : 'https://neko-cafe-back.herokuapp.com/auth/test'

        setAnswer('...loading')
        setInfo('...loading')
        axios
            .post(url, {success: x})
            .then((res) => {
                setAnswer(res.data.errorText)
                setInfo(res.data.info)
                res.status === 200 && setImage(success200)
            })
            .catch((e) => {
                console.log(e)
                setAnswer(e.response?.data?.errorText || e.message)
                setInfo(e.response?.data?.info || e.name)
                e.response?.status === 400 && setImage(error400)
                e.response?.status === 500 && setImage(error500)
                e.response?.status === 0 && setImage(errorUnknown)
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>
            <div className={s2.hw}>
                {/*для автоматической проверки дз (не менять)*/}
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={answer === '...loading'}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={answer === '...loading'}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={answer === '...loading'}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)}
                        xType={'secondary'}
                        disabled={answer === '...loading'}
                    >
                        Send null
                    </SuperButton>
                </div>
                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image !== '' && <img src={image} alt="status"/>}
                    </div>
                    <div className={s.textContainer}>
                        <div id={'hw13-answer'} className={s.answer}>
                            {answer}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HW13
