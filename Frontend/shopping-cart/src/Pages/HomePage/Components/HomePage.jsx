import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductDetails } from '../Redux/action';
import { ProductCard } from './ProductCard';
import {
    Container,
    Grid
} from "@material-ui/core";

export function HomePage() {
    const allProducts = useSelector(state => state.home.allProducts);
    const loading = useSelector(state => state.home.loading);
    const error = useSelector(state => state.home.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProductDetails());
    },[])

    return (
        <Container maxWidth = "xl">
            {
                loading && <h2>Loading...</h2>
            }
            {
                error && <h2>Something went wrong!!</h2>
            }
            <Grid container spacing={6} >
                {
                    allProducts && allProducts.map((item) => {
                        return (
                            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key = { item.id } >
                                <ProductCard
                                    id = { item.id }
                                    title = { item.title }
                                    image = { item.image }
                                    price = { item.price }
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}
