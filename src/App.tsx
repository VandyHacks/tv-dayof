import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import { Announcements } from './components/Announcements';
import { Schedule, sortEvents } from './components/Schedule';
import { events, EventRecord } from '../assets/schedule';
import { List } from 'immutable';
import '../assets/scss/App.scss'

class App extends React.Component<{}, { events: List<EventRecord> }> {
    componentWillMount() {
        this.setState({
            events: sortEvents(events),
        });
    }

    render() {
        return <div className='Main'>
            <Header />
            <Announcements />
            <Schedule allEvents={this.state.events} />
        </div>
    }
}

let AppEl = document.getElementById("App");

ReactDOM.render(<App />, AppEl);