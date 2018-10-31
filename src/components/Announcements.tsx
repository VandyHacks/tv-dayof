import * as React from 'react';
import Timeago from 'react-timeago';
import { List, Map } from 'immutable';
import '../../assets/scss/Announcements.scss';

interface AnnouncementState {
    displayedMsgs: List<any>,
    allMsgs: List<any>,
}

export class Announcements extends React.Component<{}, AnnouncementState> {
    socket: WebSocket;
    constructor(props: any) {
        super(props);
        this.state = {
            displayedMsgs: List<Map<any, any>>(),
            allMsgs: List<any>(),
        };
    }

    componentWillMount() {
        const HOST = 'wss://vandyhacksnotifications.herokuapp.com/';
        this.socket = new WebSocket(HOST);
        this.socket.onmessage = (e) => {
            if (e.data === 'reload') {
                window.location.reload();
            } else {
                const msgs = JSON.parse(e.data);
                if (msgs.length < 3) {
                    this.setState(() => {
                        msgs: msgs
                    });
                } else {
                    let newMsgs: Array<any>;
                    const len = msgs.length;

                    for (let i = 1; i <= 4; i++) {
                        // Put on beginning because freshest is most important
                        newMsgs.unshift(msgs[len - i]);
                    }

                    this.setState(() => {
                        msgs: newMsgs
                    });
                }
            }
        };
    }

    render() {
        console.log(this.state.allMsgs);
        return <div className='announcements'>
            <h1>Announcements</h1>
            {this.state.displayedMsgs.size > 0 ? this.state.displayedMsgs.map((m, i) => {
                <AnnouncementCard
                    time={m.time}
                    message={m.msg}
                    class={i === 0 ? 'main-msg' : 'side-msg'} />
            }) : null}
            {/* <AnnouncementCard time={new Date()} message={"HELLO WORLD THIS IS A REALLY LONG MESSAGE AND IT JUST KEEPS GOING TO SEE WHAT HAPPENS ON OVERFLOW FOR ALL OF THIS TEXT EBCAUES IF SOMEONE IS WORDY THEY MIGHT HAVE A REALLY LONG MESSAGE THAT DOESN'T GET FULLY DISPLAYED SO IT KEEPS ON GOING LIKE THE SONG THAT I SING IN THE SHOWER. IT NEVER ENDS, NO NEVER ENDS!"} class='main-msg' />
            <AnnouncementCard time={new Date()} message={"HELLO WORLD"} class='side-msg' />
            <AnnouncementCard time={new Date()} message={"HELLO WORLD"} class='side-msg' />
            <AnnouncementCard time={new Date()} message={"HELLO WORLD"} class='side-msg' /> */}
        </div>
    }
}

interface Message {
    time: Date,
    msg: string,
}

export interface AnnouncementCardInterface {
    message: string,
    time: Date,
    class: string,
}

export const AnnouncementCard = (props: AnnouncementCardInterface) => {
    return (
        <section className={props.class + ' msg card'} >
            <div className='time'>
                <Timeago date={props.time} />
            </div>
            <div className='text'>
                {props.message}
            </div>
        </section>
    )
}