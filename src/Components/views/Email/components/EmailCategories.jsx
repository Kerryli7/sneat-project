import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Badge from "@mui/material/Badge";
import {useCallback, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
export default function EmailCategories() {
    const [activeCategory, setActiveCategory] = useState('Inbox');
    const navigate = useNavigate();
    const [categories, setCategories] = useState([
        {
            icon: <EmailOutlinedIcon />,
            name: 'Inbox',
            messageCount: 2,
            textColor: 'blue-800',
            badgeBgColor: 'blue-100',
        },
        {
            icon: <SendOutlinedIcon />,
            name: 'Sent',
            messageCount: 0,
            textColor: 'gray-800',
            badgeBgColor: 'gray-100',
        },
        {
            icon: <ModeOutlinedIcon />,
            name: 'Draft',
            messageCount: 4,
            textColor: 'green-800',
            badgeBgColor: 'green-100',
        },
        {
            icon: <StarBorderPurple500OutlinedIcon />,
            name: 'Starred',
            messageCount: 0,
            textColor: 'yellow-800',
            badgeBgColor: 'yellow-100',
        },
        {
            icon: <ReportGmailerrorredOutlinedIcon />,
            name: 'Spam',
            messageCount: 2,
            textColor: 'indigo-800',
            badgeBgColor: 'indigo-100',
        },
        {
            icon: <DeleteOutlineOutlinedIcon />,
            name: 'Trash',
            messageCount: 0,
            textColor: 'purple-800',
            badgeBgColor: 'purple-100',
        }

    ]);

    const location = useLocation();
    const isActive = useCallback((categoryName) => {
        return location.pathname.toUpperCase().includes(categoryName.toUpperCase());
    }, [location]);

    return (
        <ul>
            {categories.map(category => {
                const active = isActive(category.name);

                return (
                    <li
                        onClick={() => {
                           navigate(`/Email/` + category.name)
                        }}
                        key={category.name}
                        className={
                        `
                            transition border-l-4 cursor-pointer  mb-2 box-border flex items-center h-10 pl-4 pr-4 
                            ${active ? ` border-purple-600 ` : 'border-white'}
                            ${active ? `text-purple-600` : ''}
                            
                            `}>
                             {category.icon}
                        <span className={'ml-2 mr-auto'}>
                            {category.name}
                        </span>
                        {category.messageCount > 0 && (
                            <span
                                className={`inline-flex 
                                items-center 
                                justify-center 
                                w-4 h-4 ml-2 text-xs 
                               
                                bg-blue-100
                                        font-semibold  
                                        rounded-full`}>
                        {category.messageCount}
                        </span>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}