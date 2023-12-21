import Avatar from "@mui/material/Avatar";

export default function MessageItem(
    {
        isMyMessage = false,
        avatar,
        message,
        time
    }
) {
    if (!message) {
        return <></>;
    }
    return (
        <div className={`flex items-start ${isMyMessage ? 'flex-row-reverse' : ''}`}>
            <Avatar src={avatar}/>
            <div>
                <div className={
                    `${isMyMessage ? 'me-2' : 'ms-2'} 
                    ${isMyMessage ? 'bg-purple-500' : 'bg-white'}
                    ${isMyMessage ? 'text-white' : 'text-gray-950'} 
                    rounded-lg text-sm py-2 px-3 ${isMyMessage ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                    {message}
                </div>
                <p className={`px-3 text-sm/[11px] mt-2 text-gray-400 ${isMyMessage ? 'text-end' : ''}`}>
                    <small>
                        {time}
                    </small>
                </p>
            </div>
        </div>
    )
}