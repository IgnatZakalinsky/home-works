import React from 'react'
import Message from './Message'
import MessageSender from './MessageSender'

export const message0 = {
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

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <hr/>
            homeworks 1

            {/*проверка отображения (не менять)*/}
            <Message message={message0}/>

            {/*для автоматической проверки дз (не менять)*/}
            <MessageSender M={Message}/>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW1
