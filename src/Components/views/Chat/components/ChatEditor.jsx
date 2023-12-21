import Paper from "@mui/material/Paper";
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {useState} from "react";
export default function ChatEditor(
    {
        onSendMessage
    }
) {

    const [message, setMessage] = useState('');

    return (
        <div className={'p-3 w-full'}>
            <Paper className={'py-2 px-3 h-14 flex items-center'} elevation={1}>
                <input
                    value={message}
                    onChange={e => {
                        setMessage(e.target.value);
                    }}
                    className={'outline-none w-3/4 me-auto'} placeholder={'Type your message here...'}/>
                <IconButton>
                    <KeyboardVoiceOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon />
                </IconButton>
                <Button
                    onClick={() => {
                        onSendMessage(message);
                        setMessage('');
                    }}
                    variant={'contained'}>
                    SEND
                </Button>
            </Paper>
        </div>
    )
}