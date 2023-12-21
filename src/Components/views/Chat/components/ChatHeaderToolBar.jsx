import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from "@mui/material/IconButton";

export default function ChatHeaderToolBar() {
    return (
        <Box className={'flex items-center'}>
            <Avatar src={'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png'}/>
            <div className={'ms-2 me-auto'}>
                <h3 className={'text'}>
                    <strong>Felecia Rower</strong>
                </h3>
                <p className={'text-xs text-gray-300'}>
                    Frontend Developer
                </p>
            </div>
            <div className={'flex items-center'}>
                <IconButton>
                    <LocalPhoneOutlinedIcon />
                </IconButton>
                <IconButton>
                    <VideocamOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon/>
                </IconButton>
            </div>
        </Box>
    )
}