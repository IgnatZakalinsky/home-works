import React, {useState} from 'react'
import {message0} from './HW1'

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const addMessage = () => {
        setMessages([...messages, {
            id: messages.length ? messages.length + 1 : 1,
            user: message0.user,
            message: {
                text,
                time: new Date().toTimeString().slice(0, 5),
            },
        }])
        setText('')
    }

    return (
        <>
            {messages.map(m => <M key={'message' + m.id} message={m}/>)}

            <div id={'hw1-send-message-form'}>
                <textarea id={'hw1-textarea'} value={text} onChange={e => setText(e.currentTarget.value)} style={{margin: '0 10px'}}/>
                <button id={'hw1-button'} onClick={addMessage}>send</button>
            </div>
        </>
    )
}

export default MessageSender
