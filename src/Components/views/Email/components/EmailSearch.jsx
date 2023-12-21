import SearchOutLined from '@mui/icons-material/SearchOutlined';
import {useState} from "react";

export default function EmailSearch({onSearch}) {
    const [keyword, setKeyword] = useState('');
    return (
        <div className={'py-4 px-6 flex items-center'}>
            <SearchOutLined />
            <input
                value={keyword}
                onChange={e => {
                    setKeyword(e.target.value);
                    onSearch(e.target.value);
                }}
                className={'ml-3 outline-none'} placeholder={'Search mail'}/>
        </div>
    )
}