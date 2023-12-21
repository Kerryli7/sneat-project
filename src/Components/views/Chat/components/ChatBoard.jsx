import ChatHeaderToolBar from "./ChatHeaderToolBar";
import ChatMessages from "./ChatMessages";
import ChatEditor from "./ChatEditor";
import {useState} from "react";


export default function ChatBoard() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            isMyMessage: false,
            avatar: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/2.png',
            message: 'Hello ! Did you eat?',
            sendTime: new Date('2023-09-23'),
            author: 'Sorli'
        },
        {
            id: 2,
            isMyMessage: false,
            avatar: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/2.png',
            message: 'Hello ! Did you sleep?',
            sendTime: new Date('2023-09-23 19:20:00'),
            author: 'Sorli'
        },
        {
            id: 3,
            isMyMessage: true,
            avatar: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png',
            message: 'Yes',
            sendTime: new Date('2023-09-23 19:21:11'),
            author: 'Jack'
        }
    ]);

    const handleSendMessage = (message) => {
        setMessages([
            ...messages,
            {
                id: Date.now(),
                isMyMessage: true,
                avatar: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png',
                message: message,
                sendTime: new Date(),
                author: 'Jack'
            }
        ])
    }

    return (
        <div className={'w-full h-full flex flex-col'}>
            <div className={'p-3 border-b h-15'}>
                <ChatHeaderToolBar />
            </div>
            <div className={'p-3 grow flex flex-col overflow-auto'}>
                <div className={'h-5/6'}>
                    <ChatMessages messages={messages}/>
                </div>
                <div className={'h-1/6 flex items-end'}>
                    <ChatEditor onSendMessage={handleSendMessage}/>
                </div>
            </div>
        </div>
    )
}