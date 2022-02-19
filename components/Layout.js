import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Badge,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
//import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state } = useContext(Store); //dispatch
  const { cart } = state;
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
              <Link>
                {cart.cartItems.length > 0 ? (
                  <Badge color="secondary" badgeContent={cart.cartItems.length}>
                    Cart
                  </Badge>
                ) : (
                  'Cart'
                )}
              </Link>
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
