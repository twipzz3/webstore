import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import Box from '@mui/material/Box';

export default function Home(props) {
  const router = useRouter();
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { products } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid
          container
          spacing={3}
          //justify="flex-start"
          style={{
            //marginLeft: -90,
            //marginRight: 70,
            width: '1300px',
            height: '850px',
            textAlign: 'left',
            //backgroundSize: 'cover',
          }}
        >
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card className={classes.backgr}>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      style={{
                        //width: '420px',
                        height: '500px',
                        //backgroundSize: 'cover',
                      }}
                    ></CardMedia>
                    <CardContent
                      style={{
                        height: '130px',
                      }}
                    >
                      <Typography className={classes.unitName}>
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: '36px',
                      lineHeight: '36px',
                    }}
                  >
                    ${product.price}
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      //p: 2,
                      padding: '1px 10px',
                      border: '2.5px solid white',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Button
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        lineHeight: '36px',
                        color: '#ffffff',
                      }}
                      //size="small"
                      //color="primary"
                      onClick={() => addToCartHandler(product)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
