import React from 'react';
import {Container, Icon, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import GoogleAuth from "./google-auth/GoogleAuth";

const Header = () => {
    return (
        <Menu color='violet' inverted stackable style={{borderRadius: 0}}>
            <Container>
                <Menu.Item>
                    <h2><Icon name='react'/> SimpleCRUD</h2>
                </Menu.Item>
                <Menu.Item as={ Link } name='list' to='/'>
                   <Icon name='list'/> Post List
                </Menu.Item>
                <Menu.Item className="right">
                    <GoogleAuth/>
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default Header;
