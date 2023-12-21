import {Checkbox, Tooltip} from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import moment from "moment";
import StarIcon from '@mui/icons-material/Star';

function getIndicator(emailType) {
    const indicators = {
        'Personal':   <span className="flex w-2 h-2 bg-green-400 rounded-full mr-1"></span>,
        'Company': <span className="flex w-2 h-2 bg-purple-500 rounded-full mr-1"></span>,
        'Important':  <span className="flex w-2 h-2 bg-yellow-300 rounded-full mr-1"></span>,
        'Private': <span className="flex w-2 h-2 bg-red-500 rounded-full mr-1"></span>
    };
    return indicators[emailType]
}

export default function EmailList(
    {
        emailMessages,
        onCheckEmail,
        onUnCheckEmail,
        checkedEmailIds,
        onClickCollect,
        collectedEmailIds
    }) {



    return (
        <ul className={'h-full overflow-auto'}>
            {emailMessages.map(emailMessage => {

                const indicators = emailMessage.labels.map(getIndicator);
                return (
                    <li key={emailMessage.id} className={'h-16 pl-4 border-t transition flex items-center group cursor-pointer hover:shadow-xl'}>
                        <Checkbox
                            checked={checkedEmailIds.includes(emailMessage.id)}
                            onChange={e => {
                                if (e.target.checked) {
                                    onCheckEmail(emailMessage.id);
                                } else {
                                    onUnCheckEmail(emailMessage.id);
                                }
                            }}
                        />
                        <IconButton onClick={() => onClickCollect(emailMessage)}>
                            {!collectedEmailIds.includes(emailMessage.id) && (
                                <StarBorderOutlinedIcon />
                            )}
                            {collectedEmailIds.includes(emailMessage.id) && (
                                <StarIcon className={'text-yellow-500'} />
                            )}
                        </IconButton>
                        <Avatar
                            className={'ml-3'}
                            sx={{
                                width: '30px',
                                height: '30px'
                            }}
                            src={emailMessage.sender.avatar}/>
                        <h2 className={'ml-3 text-gray-700'}>
                            {emailMessage.sender.name}
                        </h2>
                        <p className={'text-xs ml-4 text-gray-400 mr-auto'}>
                            {emailMessage.subject}
                        </p>
                        <div className={'flex items-center group-hover:hidden'}>
                            {indicators}
                            <span className={'text-gray-300 text-xs mr-5 ml-2'}>
                                {moment(emailMessage.sendTime).format('HH:mm A')}
                            </span>
                        </div>
                        <div className={'flex items-center hidden group-hover:block'}>
                            <Tooltip title={'Delete Mail'}>
                                <IconButton>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Read Mail'}>
                                <IconButton>
                                    <EmailOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Move To Spam'}>
                                <IconButton>
                                    <ReportGmailerrorredIcon />
                                </IconButton>
                            </Tooltip>

                        </div>
                    </li>
                )
            })}
        </ul>
    )
}