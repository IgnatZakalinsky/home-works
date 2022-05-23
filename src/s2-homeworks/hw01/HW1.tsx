import React from 'react'
import Message from './Message'
import MessageSender from './MessageSender'
import s from './Message.module.css'
import FriendMessage from './FriendMessage'

// нужно создать правильный тип вместо any
export type MessageType = any

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
    },
    message: {
        text: 'some text',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Friend Name',
    },
    message: {
        text: 'можно добавить зеркальное сообщение для тренировки css',
        time: '22:00',
    },
}


const HW1 = () => {
    return (
        <div id={'hw1'} className={s.hw1}>
            <hr/>
            {/*можно убрать этот тег*/}

            <div className={s.hwTitle}>homeworks 1</div>

            {/*проверка отображения (не менять)*/}
            <Message message={message0}/>

            {/*не обязательно*/}
            <FriendMessage message={friendMessage0}/>

            {/*для автоматической проверки дз (не менять)*/}
            <MessageSender M={Message}/>

            <hr/>
            {/*можно убрать этот тег*/}
            <hr/>
            {/*можно убрать этот тег*/}
        </div>
    )
}

export default HW1
