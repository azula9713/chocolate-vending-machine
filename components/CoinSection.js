import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { totalMoneyState } from "../atoms/CartAtom";

const CoinSection = () => {
  const [currentCoin, setCurrentCoin] = useState(0);
  const [totalCoins, setTotalCoins] = useRecoilState(totalMoneyState);
  const [currency, setCurrency] = useState("$");

  const ejectAllCoins = () => {
    if (totalCoins > 0) {
      setCurrentCoin(0);
      setTotalCoins(0);
    } else {
      alert("No coins to eject");
    }
  };

  const checkMoney = () => {
    //Validating money
    if (currency === "$") {
      if (currentCoin === 1 || currentCoin === 2) {
        setTotalCoins(totalCoins + currentCoin * 100);
        setCurrentCoin(0);
      } else {
        alert("Please enter a valid coin value");
      }
    } else if (currency.toLowerCase() === "c") {
      if (currentCoin === 10 || currentCoin === 20 || currentCoin === 50) {
        setTotalCoins(totalCoins + currentCoin);
        setCurrentCoin(0);
      } else {
        alert("Please enter a valid coin value");
      }
    } else {
      alert("Invalid currency");
    }
  };

  useEffect(() => {
    if (totalCoins > 310) {
      alert("Please use exact change");
    } else {
      if (currency === "$") {
        setTotalCoins(totalCoins - currentCoin * 100);
      } else if (currency.toLowerCase() === "c") {
        setTotalCoins(totalCoins - currentCoin);
      }
    }
  }, [totalCoins]);

  return (
    <CoinSectionWrapper>
      <WarningSection>
        <GeneralWarning>
          Please enter coins in the following denominations (10c, 20c, 50c, $1,
          $2).
        </GeneralWarning>
      </WarningSection>
      <InputWrapper>
        <CoinInput
          value={currentCoin}
          onChange={(e) => {
            setCurrentCoin(parseInt(e.target.value));
          }}
          type="number"
          name="money"
          placeholder="Enter value"
        />
        <CurrencyInput
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
          value={currency}
          type="text"
          name="currency"
          placeholder="currency"
        />
      </InputWrapper>

      <ButtonWrapper>
        <SubmitButton onClick={checkMoney}>Submit Coin</SubmitButton>
        <EjectButton onClick={ejectAllCoins}>Eject All Coins</EjectButton>
      </ButtonWrapper>
    </CoinSectionWrapper>
  );
};

export default CoinSection;

const CoinSectionWrapper = styled.div`
  margin: 20px 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinInput = styled.input`
  padding: 5px;
  width: 100px;
  font-size: 30px;
  text-align: center;
  margin: 0 5px;
`;

const CurrencyInput = styled(CoinInput)`
  width: 50px;
`;

const SubmitButton = styled.button`
  margin: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: darkgreen;
  }
`;

const EjectButton = styled(SubmitButton)`
  background-color: red;

  &:hover {
    background-color: darkred;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WarningSection = styled.div`
  margin: 10px;
`;

const GeneralWarning = styled.label``;
