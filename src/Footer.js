import React, { useContext } from "react";
import { Footer, Icon } from "react-materialize";
import { ThemeContext } from './ThemeContext';

export default function FooterBig() {

    const { theme } = useContext(ThemeContext);
    return (
        <Footer style={{ backgroundColor: '#171717', marginTop: '50px' }}
            moreLinks={<h6 className="grey-text text-lighten-4 right" href="#!">Cloud Theatre</h6>}
        >
            <h5 style={{ color: '#5a7082' }}>
                Have a nice day!
            </h5>
            <p style={{ color: '#5a7082' }}>
                Cloud Theatre hopes you enjoy us!
            </p>
        </Footer>
    );

}
