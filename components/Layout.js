import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>eclipse</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>eclipse</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. eclipse.</Typography>
      </footer>
    </div>
  );
}
