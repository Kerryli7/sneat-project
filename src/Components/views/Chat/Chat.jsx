import {Card, CardContent, Container, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ChatSideBar from "./components/ChatSideBar";
import ChatBoard from "./components/ChatBoard";


export default function Chat() {
    return (
        <Box marginLeft={'5.5rem'}>
            <div
                style={{
                    height: '80vh',
                    width: '80vw',
                    marginLeft: '5vw',
                    padding: 0,
                    background: 'white',
                }}
                className={'border border-1 rounded grid grid-cols-6'}
            >
                <div className={'col-span-2 h-full'}>
                    <ChatSideBar />
                </div>
                <div className={'col-span-4 h-full bg-gray-100'}>
                    <ChatBoard />
                </div>

            </div>

        </Box>
    )
}