import * as React from 'react'
import '../../assets/scss/CountdownTimer.scss'

export interface CountdownProps {
    end: Date,
}

interface CountdownState {
    hours: string,
    minutes: string,
    seconds: string,
}

export class CountdownTimer extends React.Component<CountdownProps, CountdownState> {
    interval: any;

    componentWillMount() {
        this.updateTime();
        this.interval = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // setTimeout call at end will keep running this in a loop every second
    updateTime = () => {
        const now: Date = new Date();
        const diff = this.props.end !== now ? this.props.end.getTime() - now.getTime() : 0;

        let hours: any = Math.floor(diff / (1000 * (60 ** 2)));
        let minutes: any = Math.floor((diff % (1000 * (60 ** 2))) / (1000 * 60));
        let seconds: any = Math.floor((diff % (1000 * 60)) / 1000);

        hours = hours < 10 ? `0${hours}` : `${hours}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }

    render() {
        return <div className="countdown" >
            <div className="remaining">
                <b>Time<br />Remaining</b>
            </div>
            <div className="labels" id="hour">
                HOUR
            </div>
            <div className="time">
                {this.state.hours}
            </div>
            <div className="labels" id="min">
                MIN
            </div>
            <div className="time">
                {this.state.minutes}
            </div>
            <div className='labels' id="sec">
                SEC
            </div>
            <div className="time">
                {this.state.seconds}
            </div>
        </div>
    }
};