import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from "react";
import StatusAvatar from "../../../StatusAvatar/StatusAvatar";
export default function SearchContacts(
    {
        onSearch
    }
) {
    const [keyword, setKeyword] = useState('');

    

    return (
        <Box className={'flex items-center'}>
            <StatusAvatar
                online={true}
            avatar={<Avatar
                className={'cursor-pointer'}
                src={'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png'}/>}
            />
            <div className={'border h-10 ms-3 px-4 py-1 flex items-center rounded-3xl w-full'}>
                <SearchIcon />
                <input
                    value={keyword}
                    onChange={e => {
                        setKeyword(e.target.value);
                        onSearch(e.target.value);
                    }}
                    className={'h-full w-full outline-none ms-1'} placeholder={'Search for contact...'}/>
            </div>
        </Box>
    )
}