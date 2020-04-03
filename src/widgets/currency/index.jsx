import React from 'react';
import DropDownList from './DropDownList';
import CurrencyInfo from './CurrencyInfo';

const optionList = [ { values: 'X', text: '--선택--' }];
CurrencyInfo.forEach((currency, i) => {
  optionList[i + 1] = { value: currency[i].cur_unit, text: currency[i].cur_nm };
});

const passCurrency = () => (
  alert('not implemented!')
);

const onSelect = () => (
  alert('not implemented!')
);

const handleClick = () => (
  alert('not implemented!')
);

const Currency = () => (
  <div id='currencyWidget'>
    <p id='amountOfMoney'>
      <span>환전 금액: </span>
      <i>   ₩    </i>
      <input type="text" id="EXCHANGE_AMOUNT" />
    </p>
    <p id='selectCurrency'>
      <span id='currencyText'>환전 통화: </span>
      <DropDownList optionList={optionList} onChange={onSelect} />
    </p>
    <button type="button" id="exchangeButton" onClick={() => handleClick()}>환전하기</button>
  </div>
);

export default Currency;
