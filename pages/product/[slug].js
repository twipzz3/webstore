import React, { useContext } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  //Card,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import Product from '../../models/Product';
import db from '../../utils/db';
import axios from 'axios';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';

export default function ProductScreen(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { product } = props;
  //const selectedSize = [0];
  const classes = useStyles();
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = async () => {
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

  /*   const componentDidMount = async () => {
    let defSize = this.state.product.sizes[0];
    this.setState({
      selectedSize: defSize,
    });
  };

  const renderSize = async () => {
    let sizes = [];
    this.state.product.sizes.map((s, i) => {
      size.push(<Item key={i} label={s} value={s} />);
    });
    return size;
  }; */

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              back to products
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={5} xs={16}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid>
          <List>
            <ListItem>
              <Typography
                style={{
                  fontWeight: 'bold',
                  fontSize: '64px',
                  lineHeight: '64px',
                }}
              >
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.defFont}>
                Category: {product.category}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.defFont}>
                {' '}
                Description: {product.description}
              </Typography>
            </ListItem>
            <ListItem>
              <Select
                style={{
                  backgroundColor: 'white',
                  width: '200px',
                }}
              >
                <MenuItem mode="dropdown" placeholder="Select a size">
                  {product.sizes}
                </MenuItem>
              </Select>
            </ListItem>
            <ListItem>
              <Typography className={classes.defFont}>
                Price: ${product.price}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.defFont}>
                Status: {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
              </Typography>
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <ListItem>
                  <NextLink href="/3droom" passHref>
                    <Button variant="contained" color="primary">
                      3D room
                    </Button>
                  </NextLink>
                </ListItem>
              </Grid>
              <Grid item xs={5}>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </ListItem>
              </Grid>
            </Grid>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
