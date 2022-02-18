import { makeStyles } from '@material-ui/core';
//import { NextRequest } from 'next/server';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  home: {
    position: 'absolute',
    left: 210,
    top: 40,
    borderRadius: null,
    fontWeight: 500,
    textAlign: 'left',
    color: '#FFFFFF',
  },

  room: {
    position: 'absolute',
    left: 292,
    top: 40,
    borderRadius: null,
    fontWeight: 500,
    textAlign: 'left',
  },

  cart: {
    position: 'absolute',
    left: 1313,
    top: 40,
    borderRadius: null,
    fontWeight: 500,
    textAlign: 'right',
  },

  main: {
    minHeight: '80vh',
  },

  footer: {
    marginTop: 10,
    textAlign: 'center',
  },

  //product page
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default useStyles;
