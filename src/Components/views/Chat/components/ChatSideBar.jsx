import Box from "@mui/material/Box";
import SearchContacts from "./SearchContacts";
import Chats from "./Chats";
import Contacts from "./Contacts";
import {useState} from "react";

const FRIENDS_DATA = [
    {
        id: 1,
        name: "John Doe",
        avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/2.png",
        firstMessage: "Hello, how are you?",
        bio: "Frontend Developer",
        time: 'Sep 23'
    },
    {
        id: 2,
        name: "Jane Smith",
        avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png",
        firstMessage: "Hi there!",
        bio: "UX Designer",
        time: 'Sep 23'
    },
    {
        id: 3,
        name: "Bob Johnson",
        avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
        firstMessage: "Hey!",
        bio: "Backend Developer",
        time: 'Sep 23'
    },
];

const CONTACTS_DATA = [
    {
        id: 1,
        name: "John Doe",
        avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/2.png",
        firstMessage: "Hi, how's your day going?",
        bio: "Frontend Developer"
    },
    {
        id: 2,
        name: "Jane Smith",
        avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png",
        firstMessage: "Good to see you!",
        bio: "UX Designer"
    },
    {
        id: 3,
        name: "Bob Johnson",
        avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
        firstMessage: "Hello there!",
        bio: "Backend Developer"
    },
]

export default function ChatSideBar() {

    const [activeItem, setActiveItem] = useState('');
    const [friends, setFriends] = useState( [...FRIENDS_DATA]);
    const [contacts, setContacts] = useState([...CONTACTS_DATA]);


    const handleClickItem = (listName, itemId) => {
        setActiveItem(listName + '-' + itemId);
    }

    const handleSearch = (keyword) => {
        console.log(keyword)
        setFriends(FRIENDS_DATA.filter(friend => {
            return friend.name.includes(keyword);
        }));
        setContacts(CONTACTS_DATA.filter(contact => {
            return contact.name.includes(keyword)
        }))
    }


    return (
        <>
            <div className={'h-full border-r flex flex-col'}>
                <div className={'p-3 border-b'}>
                    <SearchContacts onSearch={handleSearch}/>
                </div>
                <div className={'p-2 mt-4'}>
                    <Chats
                        friends={friends}
                        activeItem={activeItem}
                        onClickItem={(friendId) => {
                            handleClickItem('Chats', friendId);
                        }}
                    />
                    <Contacts
                        contacts={contacts}
                        activeItem={activeItem}
                        onClickItem={(contactId) => {
                            handleClickItem('Contacts', contactId);
                        }}
                    />
                </div>
            </div>
        </>
    )
}