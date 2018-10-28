import * as React from 'react';
import '../../assets/scss/Schedule.scss';

export class Schedule extends React.Component {
    componentWillMount() {

    }

    render() {
        return <div className='schedule'>
            <h1>Schedule</h1>
            <ScheduleCard time={new Date()} name='Massages' when='Now' />
            <ScheduleCard time={new Date()} name='Cryptography workshop' when='Next' />
            <ScheduleCard time={new Date()} name='BOS Workshop' when='Looking ahead' />
        </div>
    }
}

export interface ScheduleCardInterface {
    name: string,
    time: Date,
    when: string,
}

export const ScheduleCard = (props: ScheduleCardInterface) => (
    <section className='event card'>
        <div className='time'>
            {props.time.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', })}
        </div>
        <div className='text'>
            {props.name}
        </div>
        <div className='when'>
            {props.when}
        </div>
    </section >
)