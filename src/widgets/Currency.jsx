import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const CurrencyList = (props) => {
  const { id, handleOption } = props;
  return (
    <select name="CURRENCY_LIST" id={id} defaultValue="X" onChange={(e) => handleOption(e)}>
      <option value="X">--Choose a nation--</option>
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
  handleOption: PropTypes.func.isRequired,
};

const Currency = () => {
  const [ratio, setRatio] = useState(1);
  const [input, setInput] = useState(0);
  const baseUrl = 'https://earthquake.kr:23490/query';
  const nationFrom = useRef('X');
  const nationTo = useRef('X');

  const updateRatio = () => {
    if (nationFrom.current !== 'X' && nationTo.current !== 'X') {
      const searchKey = `${nationFrom.current}${nationTo.current}`;
      const url = `${baseUrl}/${searchKey}`;
      window.console.log(searchKey);
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if (Object.prototype.hasOwnProperty.call(json, searchKey)) {
            setRatio(json[searchKey][0]);
          } else {
            setRatio(0);
          }
        })
        .catch((res) => window.console.error(res));
    }
  };

  const handleSelected = (e) => {
    const { value } = e.target.options[e.target.selectedIndex];
    const { id } = e.target;
    if (id === 'options_from') {
      nationFrom.current = value;
    } else {
      nationTo.current = value;
    }
    updateRatio();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div id="currency">
      <h4> From </h4>
      <CurrencyList id="options_from" handleOption={handleSelected} />
      <input type="text" id="amount_from" size="20" placeholder="0" onChange={(e) => handleInput(e)} />
      <h4> To </h4>
      <CurrencyList id="options_to" handleOption={handleSelected} />
      <input type="text" id="result" value={ratio > 0 ? ratio * input : '지원하지 않는 서비스입니다.'} readOnly />
    </div>
  );
};

export default Currency;
