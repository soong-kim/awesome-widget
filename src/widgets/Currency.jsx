import React from 'react';

const authKey = 'VFLd2hbXHzciwgwcVXyXd81BFYpZD64M';
const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authKey}&data=AP01`;

function Currency() {
  const onChange = () => (
    <div>
      onChange
    </div>
  );

  const handleClick = () => (
    alert('not implemented!')
  );

  fetch(url, { mode: 'no-cors' })
    .then((response) => {
      response.text();
    })
    .then((data) => (
      (data ? JSON.parse(data) : {})
    ))
    .then((data) => {
      const select = document.getElementById('currencyName');
      const currencyInfo = data.json();
      currencyInfo.forEach((currency, i) => {
        select.innerHTML = `${select.innerHTML}
            <option value="${currency[i].cur_unit}">${currency[i].cur_nm}</option>`;
      });
    })
    .catch((error) => {
    });

  return (
    <div>
      <p>
        <span>환전 금액: </span>
        <input />
      </p>
      <p>
        <span>환전 통화: </span>
        <select name="currencyName" id="currencyName" onChange={() => onChange()} defaultValue="X">
          <option value="X">--선택--</option>
        </select>
      </p>
      <button type="button" onClick={() => handleClick()}>환전하기</button>
    </div>

  );
}

export default Currency;
