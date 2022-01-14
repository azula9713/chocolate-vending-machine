import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";
import Product from "./Product";
import { allProductsState } from "../atoms/ProductsAtom";

const ProductSection = () => {
  const [products, setProducts] = useRecoilState(allProductsState);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/api/allproducts");
    if (response.status === 200) {
      setProducts(response.data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default ProductSection;

const ProductsContainer = styled.div`
  display: grid;
  //Grid template to show 3 products in a row
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px 10px;
`;
