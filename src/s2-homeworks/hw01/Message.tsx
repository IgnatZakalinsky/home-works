import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = any

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndMessage}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    alt={'avatar'}
                    //
                />
                <div className={s.messageText}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <div id={'hw1-text-' + props.message.id} className={s.text}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </div>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
