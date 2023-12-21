import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import FriendItem from "./FriendItem";

export default function Contacts(
    {
        onClickItem,
        activeItem,
        contacts = []
    }
) {

    return (
        <Box>
            <Typography variant={'h5'} color={'rgb(105, 108, 255)'}>
                Contacts
            </Typography>
            {contacts.length === 0 && (
                <h2 className={'text-gray-400 mt-4'}>
                    No Contacts Found
                </h2>
            )}
            <List>
                {contacts.map(contact => {
                    const listType = activeItem.split('-')[0];
                    const activeId = activeItem.split('-')[1];
                    const active =
                        listType === 'Contacts' &&
                        activeId === String(contact.id);

                    return (
                        <FriendItem
                            active={active}
                            onClickItem={() => {
                                onClickItem(contact.id);
                            }}
                            friendName={contact.name}
                            avatar={contact.avatar}
                            primaryText={contact.firstMessage}
                            key={contact.id}/>
                    )
                })}
            </List>
        </Box>
    )
}