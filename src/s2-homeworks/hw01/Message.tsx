import React from 'react'

// создать тип вместо any и отобразить приходящие данные
const Message = (props: any) => {
    return (
        <div id={'hw1-message-' + props.message.id} style={{display: "flex", border: '1px solid lime', margin: '10px'}}>
            <img src={props.message.user.avatar} width={'50px'} height={'50px'} id={'hw1-avatar-' + props.message.id} alt={'avatar'}/>

            <div>
                <div id={'hw1-name-' + props.message.id}>{props.message.user.name}</div>
                <pre id={'hw1-text-' + props.message.id}>{props.message.message.text}</pre>
                <div id={'hw1-time-' + props.message.id}>{props.message.message.time}</div>
            </div>
        </div>
    )
}

export default Message
