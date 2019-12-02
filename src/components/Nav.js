import React , {Component} from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul className='nav-links'>
                    <Link className='link' to={'/greet'}>
                        <li>Greet</li>
                    </Link>
                    <Link className='link' to={'/form'}>
                        <li>Form</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;
