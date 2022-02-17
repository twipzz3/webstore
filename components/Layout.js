import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>eclipse</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.brand}>eclipse</Typography>
          <div className={classes.home}>
            <NextLink href="/" passHref>
              <Link>Home</Link>
            </NextLink>
          </div>
          <div className={classes.room}>
            <NextLink href="/3droom" passHref>
              <Link>3D Room</Link>
            </NextLink>
          </div>
          <div className={classes.cart}>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. eclipse.</Typography>
      </footer>
    </div>
  );
}
