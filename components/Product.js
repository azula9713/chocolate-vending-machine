import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { totalMoneyState } from "../atoms/CartAtom";
import { PriceConversion } from "../utils/PriceConversion";

const Product = ({ product }) => {
  const [availableMoney, setAvailableMoney] = useRecoilState(totalMoneyState);

  const buyProduct = () => {
    if (availableMoney >= product.priceInCents) {
      alert(
        `You bought a ${product.name} for ${PriceConversion(
          product?.priceInCents
        )}`
      );
      setAvailableMoney(availableMoney - product.priceInCents);
    } else {
      alert(`You don't have enough money to buy this product`);
    }
  };

  return (
    <ProductWrapper>
      <Image src={product?.imageUrl} width={150} height={150} />
      <MetaContainer>
        <ProductName>{product?.name}</ProductName>
        <ProductPrice>{PriceConversion(product?.priceInCents)}</ProductPrice>
        <BuyButton
          disabled={
            availableMoney < product?.priceInCents ||
            availableMoney > product?.priceInCents
          }
          onClick={() => {
            buyProduct();
          }}
        >
          Buy {PriceConversion(product?.priceInCents)}
        </BuyButton>
      </MetaContainer>
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductName = styled.label`
  margin: 5px 0px;
  font-size: 18px;
  text-align: center;
`;

const ProductPrice = styled(ProductName)``;

const BuyButton = styled.button`
  font-size: 18px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;
