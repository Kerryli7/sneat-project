import Box from "@mui/material/Box";
import {ListItem, ListItemAvatar} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {Fragment} from "react";
import Typography from "@mui/material/Typography";

export default function FriendItem(
    {
        avatar,
        friendName,
        primaryText,
        active,
        date,
        onClickItem
    }
) {
    return (
        <ListItem
            style={{
                background: active ? 'rgb(105, 108, 255)' : 'transparent',
                color: active ? 'white': '#333',
                borderRadius: active ? '5px' : 0,
                cursor: 'pointer',
                transition: '0.3s'
            }}
            onClick={() => {
                if (onClickItem) {
                    onClickItem();
                }
            }}
            alignItems="flex-start">
            <ListItemAvatar>
                <Avatar
                    style={{
                        border: active ? '2px solid white' : 'none'
                    }}
                    alt="Remy Sharp" src={avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <span>
                            {friendName}
                        </span>
                        <span className={active ? 'white' : 'text-gray-300'}>
                           {date}
                        </span>
                    </Box>
                }
                secondary={
                    <Fragment>
                        <Typography style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: active ? 'white': 'gainsboro'
                        }}>
                            {primaryText}
                        </Typography>
                    </Fragment>
                }
            />
        </ListItem>
    )
}