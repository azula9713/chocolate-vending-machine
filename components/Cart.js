import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { totalMoneyState } from "../atoms/CartAtom";
import { PriceConversion } from "../utils/PriceConversion";

const Cart = () => {
  const currentEnteredAmount = useRecoilValue(totalMoneyState);

  return (
    <CartContainer>
      <CurrentValue id="total-coins">
        Current Balance: {PriceConversion(currentEnteredAmount)}
      </CurrentValue>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CurrentValue = styled.div`
  font-size: 24px;
`;
