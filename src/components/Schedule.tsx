import * as React from 'react';
import { List } from 'immutable';
import '../../assets/scss/Schedule.scss';
import { EventRecord } from '../../assets/schedule';

export interface SchedulePropsInterface {
    allEvents: List<EventRecord>,
}

interface ScheduleStateInterface {
    displayedEvents: List<EventRecord>,
    interval: NodeJS.Timeout;
}

export function sortEvents(events: List<EventRecord>) {
    return List<EventRecord>(events.sort((a, b) => {
        const aStart = a.get('start').getTime();
        const aEnd = a.get('end').getTime();
        const bStart = b.get('start').getTime();
        const bEnd = b.get('end').getTime();

        // Events that start before or start at the same time and 
        // end earlier get ordered first
        if ((aStart < bStart) || (aStart == bStart && aEnd < bEnd)) {
            return -1;
        }

        // b starts after a or ends before a if they start at the same time
        if ((aStart > bStart) || (aStart == bStart && aEnd > bEnd)) {
            return 1;
        }

        return 0;
    }));
}

export class Schedule extends React.Component<SchedulePropsInterface, ScheduleStateInterface> {
    componentWillMount() {
        this.updateSchedule();
        this.setState({
            // 60000 is every minute
            interval: setInterval(this.updateSchedule, 60000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    updateSchedule = () => {
        this.setState(() => {
            const now = new Date().getTime();
            let count = 0;
            let newDisplayedEvents = List<EventRecord>();

            this.props.allEvents.forEach((e) => {
                if (count === 3) {
                    // Displayed events full. End iteration.
                    return false;
                } else if (e.get('end').getTime() < now) {
                    // Event has passed, continue iteration
                    return true;
                }

                newDisplayedEvents = newDisplayedEvents.push(e);
                ++count;
            });

            return {
                displayedEvents: newDisplayedEvents,
            }
        })
    }

    render() {
        return <div className='schedule'>
            <h1>Schedule</h1>
            {this.state.displayedEvents.map((e, i) => {
                return <ScheduleCard
                    key={i}
                    where={e.get('room')}
                    time={e.get('start')}
                    name={e.get('name')} />
            })}
        </div>
    }
}

export interface ScheduleCardInterface {
    name: string,
    time: Date,
    where: string,
}

export const ScheduleCard = (props: ScheduleCardInterface) => (
    <section className='event card'>
        <div className='time'>
            {props.time.toLocaleTimeString([], {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
            })}
        </div>
        <div className='text'>
            {props.name}
        </div>
        <div className='where'>
            {props.where}
        </div>
    </section >
)