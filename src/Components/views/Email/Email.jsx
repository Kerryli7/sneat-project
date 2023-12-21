import Box from "@mui/material/Box";
import ChatSideBar from "../Chat/components/ChatSideBar";
import ChatBoard from "../Chat/components/ChatBoard";
import Button from "@mui/material/Button";
import EmailCategories from "./components/EmailCategories";
import EmailLabels from "./components/EmailLabels";
import EmailSearch from "./components/EmailSearch";
import EmailList from "./components/EmailList";
import EmailOperations from "./components/EmailOperations";
import {useCallback, useEffect, useMemo, useState} from "react";
import {EMAIL_MESSAGES} from "./email.data";
import {useParams} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import ComposeEmail from "../../ComposeEmail/ComposeEmail";

export default function EmailManage() {

    const {type} = useParams();

    const [checkedEmailIds, setCheckedEmailIds] = useState([]);
    const [collectedEmailId, setCollectedEmailIds] = useState([]);
    const [openComposeEmail, setOpenComposeEmail] = useState(false);
    const [loading, setLoading] = useState(false);


    const [emailMessages, setEmailMessages] = useState([]);
    useEffect(() => {
        setEmailMessages(EMAIL_MESSAGES.slice(0, Math.floor(Math.random() * EMAIL_MESSAGES.length)))
    }, [type]);

    const handleCheckEmailMessage = (emailId) => {
        setCheckedEmailIds([...checkedEmailIds, emailId]);
    }

    const handleUnCheckEmailMessage = (emailId) => {
        setCheckedEmailIds(checkedEmailIds.filter(itemId => {
            return itemId !== emailId;
        }));
    }

    const handleCheckAll = () => {
        setCheckedEmailIds(emailMessages.map(item => item.id));
    }

    const handleCheckNothing = () => {
        setCheckedEmailIds([]);
    }

    const handleDeleteEmail = useCallback(() => {
        setEmailMessages(emailMessages.filter(emailMessage => {
            return !checkedEmailIds.includes(emailMessage.id);
        }));
        setCheckedEmailIds([]);
    }, [checkedEmailIds]);

    const handleClickEmail = useCallback(() => {

    }, [checkedEmailIds]);

    const handleClickTrash = useCallback(() => {

    }, [checkedEmailIds]);

    const handleClickChangeLabels = useCallback((newLabel) => {

    }, [checkedEmailIds]);

    const handleSearch = (keyword) => {
        setEmailMessages(emailMessages.filter(emailMessage => {
            return emailMessage
                .sender.name.toUpperCase()
                .includes(keyword.toUpperCase())
                ||
                emailMessage.subject.toUpperCase().includes(keyword.toUpperCase())
        }))
    }

    const handleRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handleClickCollect = (emailMessage) => {
        if (!collectedEmailId.includes(emailMessage.id)) {
            setCollectedEmailIds([...collectedEmailId, emailMessage.id]);
        } else {
            setCollectedEmailIds(collectedEmailId.filter(id => {
                return id !== emailMessage.id
            }))
        }
    }



    return (
        <Box marginLeft={'5.5rem'}>
            <div
                style={{
                    height: '80vh',
                    width: '80vw',
                    marginLeft: '5vw',
                    padding: 0,
                    background: 'white',
                }}
                className={'border border-1 rounded grid grid-cols-6'}
            >
                <div className={'col-span-1 h-full'}>
                  <div className={'px-3 pt-5 text-center'}>
                      <ComposeEmail
                          open={openComposeEmail}
                          onClose={() => {
                              setOpenComposeEmail(false);
                          }}
                        trigger={<Button
                            onClick={() => {
                                setOpenComposeEmail(!openComposeEmail);
                            }}
                            fullWidth variant={'contained'}>COMPOSE</Button>}
                      />
                  </div>
                  <div className={'mt-3'}>
                      <EmailCategories />
                  </div>
                  <div className={'mt-5'}>
                      <EmailLabels />
                  </div>
                </div>
                <div className={'col-span-5 h-full flex flex-col border-l'}>
                    <div className={'h-16 border-b'}>
                        <EmailSearch onSearch={handleSearch}/>
                    </div>
                    <div className={'grow flex flex-col'}>
                        <div className={'h-16'}>
                            <EmailOperations
                                onClickRefresh={handleRefresh}
                                checkedEmailIds={checkedEmailIds}
                                allChecked={checkedEmailIds.length > 0 && checkedEmailIds.length === emailMessages.length}
                                onCheckAll={handleCheckAll}
                                onCheckNothing={handleCheckNothing}
                                onClickDelete={handleDeleteEmail}
                                onClickEmail={handleClickEmail}
                                onClickTrash={handleClickTrash}
                                onClickChangeLabel={handleClickChangeLabels}
                            />
                        </div>
                        <div style={{
                            height: 'calc(80vh - 10rem)',
                            overflowY: 'auto',
                            position: 'relative'
                        }}>
                            {loading && (
                                <div style={{
                                    background: 'rgba(0, 0, 0, 0.2)'
                                }} className={'absolute w-full h-full left-0 top-0 z-[100] flex items-center justify-center'}>
                                    <CircularProgress />
                                </div>
                            )}
                            {emailMessages.length > 0 && (
                                <EmailList
                                    collectedEmailIds={collectedEmailId}
                                    onClickCollect={handleClickCollect}
                                    checkedEmailIds={checkedEmailIds}
                                    onCheckEmail={handleCheckEmailMessage}
                                    onUnCheckEmail={handleUnCheckEmailMessage}
                                    emailMessages={emailMessages}/>
                            )}

                            {emailMessages.length === 0 && (
                                <h2 className={'text-center mt-4'}>No Email Messages</h2>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </Box>
    )
}