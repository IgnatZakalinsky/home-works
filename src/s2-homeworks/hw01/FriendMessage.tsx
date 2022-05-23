import React from 'react'
import s from './Message.module.css'

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
            <img
                id={'hw1-friend-avatar-' + props.message.id}

                // создаёт студент
                src={props.message.user.avatar}
                width={'50px'} height={'50px'}
                alt={'avatar'}
                //
            />

            <div>
                <div id={'hw1-friend-name-' + props.message.id}>
                    {/*создаёт студент*/}
                    {props.message.user.name}
                    {/**/}
                </div>
                <pre id={'hw1-friend-text-' + props.message.id}>
                    {/*создаёт студент*/}
                    {props.message.message.text}
                    {/**/}
                </pre>
                <div id={'hw1-friend-time-' + props.message.id}>
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </div>
        </div>
    )
}

export default FriendMessage
