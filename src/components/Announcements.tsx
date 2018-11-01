import * as React from 'react';
import Timeago from 'react-timeago';
import { List, Map } from 'immutable';
import '../../assets/scss/Announcements.scss';

const URL = 'https://vandyhacksnotifications.herokuapp.com/getmsgs';

interface Message {
    time: Date,
    msg: string,
    header: string,
}

interface AnnouncementState {
    displayedMsgs: List<Message>,
    allMsgs: List<Message>,
}

export class Announcements extends React.Component<{}, AnnouncementState> {
    socket: WebSocket;
    constructor(props: any) {
        super(props);
        this.state = {
            displayedMsgs: List<any>(),
            allMsgs: List<any>(),
        };
    }

    componentDidMount() {
        this.getMsgsFromDB(); // Sets state
        this.connectToWebsocket(); // Sets this.ws
    }

    getMsgsFromDB = async () => {
        const res = await fetch(URL, {
            method: 'post',
        });
        const msgs = await res.json() as Array<Message>;

        this.setState({
            allMsgs: List<any>(msgs)
        });

        this.updateDisplayedMsgs();
    }

    connectToWebsocket = () => {
        const HOST = 'wss://vandyhacksnotifications.herokuapp.com/';
        this.socket = new WebSocket(HOST);
        this.socket.onmessage = (e) => {
            console.log('Received WebSocket message:', e);
            if (e.data === 'reload') {
                window.location.reload();
            } else {
                const msg = JSON.parse(e.data);
                console.log(msg);
                this.setState(curState => {
                    return {
                        allMsgs: curState.allMsgs.unshift({
                            time: msg.time,
                            header: msg.title,
                            msg: msg.body
                        })
                    }
                });

                this.updateDisplayedMsgs();
            }
        };

        this.socket.onclose = this.connectToWebsocket;
    }

    updateDisplayedMsgs = () => {
        if (this.state.allMsgs.size < 4) {
            this.setState(curState => {
                displayedMsgs: List<Message>(curState.allMsgs)
            });
        } else {
            this.setState(curState => {
                let allMsgs = List<Message>(curState.allMsgs);
                const newMsgs = [];
                for (let i = 0; i < 4; ++i) {
                    newMsgs.push(allMsgs.first());
                    allMsgs = allMsgs.shift();
                }

                return {
                    displayedMsgs: List<Message>(newMsgs)
                };
            });
        }
    }

    render() {
        return <div className='announcements'>
            <h1>Announcements</h1>
            {this.state.displayedMsgs.size > 1 ?
                this.state.displayedMsgs.map((m, i) => {
                    return <AnnouncementCard
                        key={i}
                        time={m.time}
                        header={m.header}
                        message={m.msg}
                        class={i === 0 ? 'main-msg' : 'side-msg'} />
                })
                : null}
        </div>
    }
}

export interface AnnouncementCardInterface {
    message: string,
    time: Date,
    class: string,
    header: string,
}

export const AnnouncementCard = (props: AnnouncementCardInterface) => {
    return (
        <section className={props.class + ' msg card'} >
            <div className='time'>
                <Timeago date={props.time} />
            </div>
            <div className='text'>
                <span className='title'>
                    {props.header}:&nbsp;
                </span>
                {props.message}
            </div>
        </section>
    )
}