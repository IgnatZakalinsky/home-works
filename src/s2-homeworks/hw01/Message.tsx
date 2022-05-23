import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = any

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <img
                id={'hw1-avatar-' + props.message.id}

                // создаёт студент
                src={props.message.user.avatar}
                width={'50px'} height={'50px'}
                alt={'avatar'}
                //
            />

            <div>
                <div id={'hw1-name-' + props.message.id}>
                    {/*создаёт студент*/}
                    {props.message.user.name}
                    {/**/}
                </div>
                <pre id={'hw1-text-' + props.message.id}>
                    {/*создаёт студент*/}
                    {props.message.message.text}
                    {/**/}
                </pre>
                <div id={'hw1-time-' + props.message.id}>
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </div>
        </div>
    )
}

export default Message
