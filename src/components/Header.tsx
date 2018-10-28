import * as React from 'react'
import { CountdownTimer } from './CountdownTimer';
import VHLogo from '../svg/VHLogo';
import '../../assets/scss/Header.scss';
import { url } from 'inspector';

const Header = () => (
    <header>
        <a className="vh-logo" href="https://dayof.vandyhacks.org">
            <VHLogo />
        </a>
        <CountdownTimer end={new Date(2018, 10, 4, 12)} />
    </header>
)

export default Header