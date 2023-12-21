import {Checkbox} from "@mui/material";

import CachedIcon from '@mui/icons-material/Cached';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FolderDeleteOutlinedIcon from '@mui/icons-material/FolderDeleteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ExpandMenu from "../../../ExpandMenu/ExpandMenu";
export default function EmailOperations(
    {
        allChecked,
        onCheckAll,
        onCheckNothing,
        checkedEmailIds,
        onClickDelete,
        onClickEmail,
        onClickTrash,
        onClickChangeLabel,
        onClickRefresh
    }
) {
    return (
        <div className={'h-full pl-4 flex items-center w-full'}>
            <Checkbox
                checked={allChecked}
                onChange={e => {
                    if (e.target.checked) {
                        onCheckAll();
                    } else {
                        onCheckNothing();
                    }
                }}
            />
            {checkedEmailIds.length > 0 && (
                <>
                    <IconButton onClick={onClickDelete}>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={onClickEmail}>
                        <EmailOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={onClickTrash}>
                        <FolderDeleteOutlinedIcon />
                    </IconButton>
                    <ExpandMenu
                        anchor={
                            <IconButton>
                                <LabelOutlinedIcon />
                            </IconButton>
                        }
                    >
                        <div
                            onClick={() => {
                                onClickChangeLabel('Personal');
                            }}
                            className={'flex items-center w-40'}>
                            <span className="flex w-3 h-3 bg-green-400 rounded-full"></span>
                            <p className={'ml-2'}>Personal</p>
                        </div>
                        <div
                            onClick={() => {
                                onClickChangeLabel('Company');
                            }}
                            className={'flex items-center w-40'}>
                            <span className="flex w-3 h-3 bg-purple-500 rounded-full"></span>
                            <p className={'ml-2'}>Company</p>
                        </div>
                        <div
                            onClick={() => {
                                onClickChangeLabel('Important');
                            }}
                            className={'flex items-center w-40'}>
                            <span className="flex w-3 h-3 bg-yellow-300 rounded-full"></span>
                            <p className={'ml-2'}>Important</p>
                        </div>
                        <div
                            onClick={() => {
                                onClickChangeLabel('Private');
                            }}
                            className={'flex items-center w-40'}>
                            <span className="flex w-3 h-3 bg-red-500 rounded-full"></span>
                            <p className={'ml-2'}>Private</p>
                        </div>
                    </ExpandMenu>
                </>
            )}


            <IconButton
                onClick={onClickRefresh}
                style={{
                marginLeft: 'auto'
            }}>
                <CachedIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
    )
}