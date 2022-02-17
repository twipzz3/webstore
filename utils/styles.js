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
    height: 14,
    width: 42,
    left: 210,
    top: 40,
    borderRadius: null,
    //font-family: HelveticaNeueCyr,
    fontSize: 14,
    fontWeight: 550,
    //lineHeight: 14, //высота строки
    textAlign: 'left',
    color: '#FFFFFF',
  },

  main: {
    minHeight: '80vh',
  },

  footer: {
    textAlign: 'center',
  },
});
export default useStyles;
