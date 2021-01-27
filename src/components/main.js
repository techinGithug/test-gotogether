import React, { Fragment } from 'react';
import {
    Box,
    Container
  }from '@material-ui/core';
import {
    NavLink
 } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const fontStyles = makeStyles({
    uppercase: {
        textTransform: 'uppercase',
    },
    capitalize: {
        textTransform: 'capitalize'
    },
    lowercase: {
        textTransform: 'lowercase'
    }
});

const linkStyle = makeStyles({
    noUnderLine: {
        textDecoration: 'none'
    }
});

const Main = () => {
    const fonts = fontStyles();
    const links = linkStyle();

    return(
        <Fragment>
        <Box 
            textAlign="center" 
            fontSize="h5.fontSize" 
            bgcolor="gray"
            mb={5}
        >
            <Box className={fonts.uppercase} fontWeight="bold" p={4} color='#fff'>test front-end</Box>
        </Box>
        <Container>
            <Box display='flex' justifyContent="center" mt={2}>
                <NavLink
                    className={links.noUnderLine}
                    activeClassName="is-active"
                    to="/"
                >
                    {/* HOME */}
                    <Box className={fonts.uppercase} mx={4} fontSize="h6.fontSize" fontWeight="bold">home</Box>
                </NavLink>
                <NavLink
                    className={links.noUnderLine}
                    activeClassName="is-active"
                    to="/pokemon"
                >
                    {/* HOME */}
                    <Box className={fonts.uppercase} mx={4} fontSize="h6.fontSize" fontWeight="bold">pokemon</Box>
                </NavLink>
                <NavLink
                    className={links.noUnderLine}
                    activeClassName="is-active"
                    to="/function1"
                >
                    {/* FUNCTION1 */}
                    <Box className={fonts.uppercase} mx={4} fontSize="h6.fontSize" fontWeight="bold">function1</Box>
                </NavLink>
                <NavLink
                    className={links.noUnderLine}
                    activeClassName="is-active"
                    to="/function2"
                >
                    {/* FUNCTION2 */}
                    <Box className={fonts.uppercase} mx={4} fontSize="h6.fontSize" fontWeight="bold">function2</Box>
                </NavLink>
                <NavLink
                    className={links.noUnderLine}
                    activeClassName="is-active"
                    to="/function3"
                >
                    {/* FUNCTION3 */}
                    <Box className={fonts.uppercase} mx={4} fontSize="h6.fontSize" fontWeight="bold">function3</Box>
                </NavLink>
            </Box>
        </Container>
        </Fragment>
    );
}

export default Main;