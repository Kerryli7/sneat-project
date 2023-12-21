import MessageItem from "./MessageItem";
import moment from "moment";
import {useEffect} from "react";


export default function ChatMessages(
    {
        messages = []
    }
) {

    let groupedMessagesByAuthor = messages.map((message, index) => {
        const nextMessage = messages[index + 1];
        if (nextMessage && nextMessage.author === message.author) {
            message.hideTime = true;
        }
        return message;
    });


    return (
        <div className={'p-3'}>
            {groupedMessagesByAuthor.map(message => {
                let time = moment(message.sendTime).format('HH:mm a');

                return (
                    <div key={message.id} className={'mb-3'}>
                        <MessageItem
                            isMyMessage={message.isMyMessage}
                            message={message.message}
                            avatar={message.avatar}
                            time={message.hideTime ? '' : time}
                            />
                    </div>
                )
            })}
        </div>
    )
}