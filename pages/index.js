import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { useDispatch, useSelector } from "react-redux/";
import { ADD_PRODUCT, GET_PRODUCT } from "../componants/redux/actions/type";

export default function Home({ producty }) {

  // const [items, setItems] = useState()
  // const fetcher = async () => {
  //   const response = await fetch("https://dummyjson.com/products");
  //   const datas = await response.json();
  //  const product = datas.products
  //   return product;
  // };
  // const { data, error, isLoading } = useSWR("products", fetcher);

  // console.log(data);


  const dispatch = useDispatch();

  const setItems = (product) =>{
    dispatch({ type: ADD_PRODUCT, payload: product });
    console.log(product);
  }
  

  return (
    <>
      {producty.map((product) => {

        return (
          <div className="product-contain" key={product.key}>
            <h1>{product.title}</h1>
            <img src={product.images[0]} />

            <Button onClick={()=> setItems(product)} variant="contained" color="success">add</Button>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  const producty = data.products;
  return {
    props: {
      producty,
    },
  };
}

Home.Layouts = "L2";
