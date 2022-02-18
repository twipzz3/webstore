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

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - eclipse` : 'eclipse'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.brand}>eclipse</Typography>
          <div className={classes.home}>
            <NextLink href="/" passHref>
              <Link>HOME</Link>
            </NextLink>
          </div>
          <div className={classes.room}>
            <NextLink href="/3droom" passHref>
              <Link>3D ROOM</Link>
            </NextLink>
          </div>
          <div className={classes.cart}>
            <NextLink href="/cart" passHref>
              <Link>CART</Link>
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
