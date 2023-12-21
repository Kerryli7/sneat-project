import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import FriendItem from "./FriendItem";

export default function Chats(
    {
        onClickItem,
        activeItem,
        friends = []
    }
) {



    return (
        <Box>
            <Typography variant={'h5'} color={'rgb(105, 108, 255)'}>
                Chats
            </Typography>
            {friends.length === 0 && (
                <h2 className={'text-gray-400 mt-4'}>
                    No Chats Found
                </h2>
            )}
            <List>
                {friends.map(friend => {
                    const listType = activeItem.split('-')[0];
                    const activeId = activeItem.split('-')[1];
                    const active =
                        listType === 'Chats' &&
                        activeId === String(friend.id);
                    return (
                        <FriendItem
                            date={friend.time}
                            active={active}
                            onClickItem={() => {
                                onClickItem(friend.id)
                            }}
                            friendName={friend.name}
                            avatar={friend.avatar}
                            primaryText={friend.firstMessage}
                            key={friend.id}/>
                    )
                })}
            </List>
        </Box>
    )
}