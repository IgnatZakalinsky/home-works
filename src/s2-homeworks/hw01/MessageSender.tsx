import React, { useState } from 'react'
import { message0 } from './HW1'
import s from './Message.module.css'

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m} />
            ))}

            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <textarea
                    id={'hw1-textarea'}
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    placeholder={'Type your message'}
                    onKeyDown={(e) =>
                        e.key === 'Enter' && e.shiftKey && addMessage()
                    }
                    title={'Shift+Enter for send'}
                    className={s.textarea}
                    rows={1}
                />
                <button
                    id={'hw1-button'}
                    onClick={addMessage}
                    className={s.button}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </button>
            </div>
        </>
    )
}

export default MessageSender
