import React, { useContext } from 'react';
import { Button, Icon, Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <Navbar style={{ backgroundColor: theme.backgroundColor }}
            brand={<Link className="brand-logo center" to="/">{<Icon style={{ color: theme.color }}>cloud</Icon>}</Link>}
            centerLogo
            id="mobile-nav"
            menuIcon={<Icon style={{ color: theme.color }}>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >

            <ul >
                <li class="active"><Link style={{ color: theme.color }} onClick={function noRefCheck() { }} to="/"><Icon left>home</Icon>Home</Link></li>
                <li ><Link style={{ color: theme.color }} to="/contact"><Icon left>contact_page</Icon>Contact</Link></li>
                <li ><Link style={{ color: theme.color }} to="/about_us"><Icon left>info</Icon>About Us</Link></li>
                <li ><Link style={{ color: theme.color }} to="/News"><Icon left>info</Icon>News</Link></li>
            </ul>
            <a>
                <Button className="btn-floating btn-large waves-effect waves-light"
                    onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                    }}
                ><Icon style={{ color: theme.color }}>lightbulb</Icon></Button>
            </a>
        </Navbar>


    )
}
