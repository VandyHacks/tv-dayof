import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import { Announcements } from './components/Announcements';
import { Schedule } from './components/Schedule';
import '../assets/scss/App.scss'

class App extends React.Component<{}, {}> {
    render() {
        return <div className='Main'>
            <Header countdownDate={new Date(2018, 10, 2, 5)} />
            <Announcements />
            <Schedule />
        </div>
    }
}

let AppEl = document.getElementById("App");

ReactDOM.render(<App />, AppEl);