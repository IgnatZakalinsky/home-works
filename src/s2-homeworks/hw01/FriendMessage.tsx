import React from 'react'
import s from './Message.module.css'

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
            <div className={s.friendImageAndMessage}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}

                    // создаёт студент
                    src={props.message.user.avatar}
                    width={'50px'} height={'50px'}
                    alt={'avatar'}
                    //
                />
                <div className={s.friendMessageText}>
                    <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <div id={'hw1-friend-text-' + props.message.id} className={s.friendText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </div>
                </div>

            </div>
            <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>

    )
}

export default FriendMessage
