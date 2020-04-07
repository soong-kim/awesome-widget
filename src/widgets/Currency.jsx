import React from 'react';
import PropTypes from 'prop-types';

const CurrencyList = (props) => {
  const { id } = props;
  return (
    <select name="CURRENCY_LIST" id={id} defaultValue="KRW">
      <option value="AUD">Austrailia</option>
      <option value="BRL">Brazil</option>
      <option value="CAD">Canada</option>
      <option value="CHF">Switzerland</option>
      <option value="CNY">China</option>
      <option value="EUR">Euro</option>
      <option value="GBP">Great Britain</option>
      <option value="HKD">Hong Kong</option>
      <option value="INR">India</option>
      <option value="JPY">Japan</option>
      <option value="KRW">Korea</option>
      <option value="MXN">Mexico</option>
      <option value="RUB">Russia</option>
      <option value="THB">Thailand</option>
      <option value="TWD">Taiwan</option>
      <option value="USD">US</option>
      <option value="VND">Vietnam</option>
    </select>
  );
};

CurrencyList.propTypes = {
  id: PropTypes.string.isRequired,
};

const searchPriceInfo = (searchKey) => (
  fetch(`https://earthquake.kr:23490/query/${searchKey}`, { mode: 'no-cors' })
    .then((res) => res.json())
    .then((json) => (json.some((e) => (e === searchKey)) ? json.searchKey[0] : 0))
    .catch(() => 0)
);

const handleInput = (e) => {
  const from = document.getElementById('options_from');
  const to = document.getElementById('options_to');
  const searchKey = `${from.options[from.selectedIndex].value}${to.options[to.selectedIndex].value}`;
  const ratio = searchPriceInfo(searchKey);
  console.log(ratio);
  if (ratio > 0) {
    document.getElementById('amount_to').setAttribute('value', ratio * e.target.value);
  } else {
    document.getElementById('amount_to').setAttribute('value', 'not implemented');
  }
};

const Currency = () => (
  <div id="currency">
    <h3> From </h3>
    <CurrencyList id="options_from" />
    <input type="text" id="amount_from" size="15" placeholder="1" onChange={(e) => handleInput(e)} />
    <h3> To </h3>
    <CurrencyList id="options_to" />
    <input type="text" id="amount_to" size="15" value="1" readOnly />
  </div>
);

export default Currency;
