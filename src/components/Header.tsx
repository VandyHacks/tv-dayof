import * as React from 'react'
import { CountdownTimer } from './CountdownTimer';
import VHLogo from '../svg/VHLogo';
import '../../assets/scss/Header.scss';
import { url } from 'inspector';

export interface IHeaderProps {
    countdownDate: Date,
}

const Header = (props: IHeaderProps) => (
    <header>
        <a className="vh-logo" href="https://dayof.vandyhacks.org">
            <VHLogo />
        </a>
        <CountdownTimer end={props.countdownDate} />
    </header>
)

export default Header