import React from 'react'
import Message from './Message'
import MessageSender from './MessageSender'
import s from './Message.module.css'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './FriendMessage'
import avatar from './avatar.png'
// нужно создать правильный тип вместо any
export type MessageType = any

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Some Name',
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Friend Name',
    },
    message: {
        text: 'можно добавить зеркальное сообщение для тренировки css',
        time: '22:00',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.hw}>
            {/*<hr/>*/}
            {/*можно убрать этот тег*/}

            <div className={s2.hwTitle}>Homework #1</div>
            <hr />
            <div className={s2.hwContainer}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />

                    {/*не обязательно*/}
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>

            {/*<hr/>*/}
            {/*можно убрать этот тег*/}
            <hr />
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW1