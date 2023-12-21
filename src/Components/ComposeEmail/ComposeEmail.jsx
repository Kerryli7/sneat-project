import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import {Autocomplete} from "@mui/lab";
import {TextField} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import {useEffect, useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMenu from "../ExpandMenu/ExpandMenu";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& MuiInput-underline': {
        border: 'none',
        margin: '0'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
            border: 'none',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});
const friends = [
    {
        name: 'Jack',
        label: 'Jack',
        avatar: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png'
    },
    {
        label: 'Rose',
        name: 'Rose',
        avatar: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png'
    }
]

export default function ComposeEmail({trigger, open, onClose}) {

    const bottom = open ? '50px' : '-500px';
    const [receivers, setReceivers] = useState([]);


    useEffect(() => {
        if (!open) {
            setReceivers([]);
        }
    }, [open]);
    return (
        <div>
            <span>
                {trigger}
            </span>

            <div
                style={{
                    transition: '0.4s',
                    bottom: bottom
                }}
                className={'fixed w-1/3 rounded right-12 z-[100] bg-white shadow-2xl'}>
                <div className={'flex bg-gray-200 items-center'}>
                    <h2 className={'text-sm text-gray-500 mr-auto px-6 py-3 font-semibold'}>Compose Email</h2>
                    <IconButton onClick={onClose}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={'px-6 py-3 border-b flex items-center w-full'}>
                    <span className={'text-gray-500 text-xs mr-3'}>To: </span>
                    <div>
                        <Autocomplete
                            multiple
                            fullWidth
                            renderOption={(props, option) => {
                                return (
                                    <div {...props} className={'flex items-center p-3 cursor-pointer'}>
                                        <Avatar
                                            style={{
                                                width: '30px',
                                                height: '30px'
                                            }}
                                            src={option.avatar}/>
                                        <p className={'ml-3'}>
                                            {option.name}
                                        </p>
                                    </div>
                                )
                            }}
                            value={receivers}
                            onChange={(_, val) => {
                               setReceivers(val);
                            }}
                            getOptionLabel={(option) => option.name}
                            disablePortal
                            id="combo-box-demo"
                            options={friends}
                            sx={{ width: 300 }}
                            renderInput={(params) => <CssTextField {...params}
                                                                    size={'small'}
                                                                   sx={{border: 'none',"& fieldset": { border: 'none' },}}
                                                                   label="Receiver" />}
                        />
                    </div>
                </div>
                <div className={'px-6 py-3 border-b flex items-center w-full'}>
                    <span className={'text-gray-500 mr-3 text-xs'}>Subject: </span>
                    <input className={'grow outline-none'}/>
                </div>
                <div className={'px-6 py-3 border-b flex items-center w-full'}>
                    <button className={'box-border h-10 bg-purple-600 rounded-r-none hover:bg-purple-800 text-white px-4 rounded py-2 border-r border-purple-700'}>SEND</button>
                    <ExpandMenu anchor={
                        <button className={'box-border h-10 bg-purple-600 rounded-l-none hover:bg-purple-800 text-white px-4 rounded py-2'}>
                            <KeyboardArrowUpIcon />
                        </button>
                    }>
                        <p>Schedule Send</p>
                        <p>Save as Draft</p>
                    </ExpandMenu>
                    <IconButton style={{marginLeft: '10px', marginRight: 'auto'}}>
                        <AttachmentIcon />
                    </IconButton>
                    <ExpandMenu
                        anchor={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    >
                        <p>Print</p>
                        <p>Check Spelling</p>
                        <p>
                            Plain text mode
                        </p>
                    </ExpandMenu>
                    <IconButton onClick={onClose}>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}