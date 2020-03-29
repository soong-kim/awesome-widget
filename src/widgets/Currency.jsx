import React from 'react';

const authKey = 'VFLd2hbXHzciwgwcVXyXd81BFYpZD64M';
const command = `curl -s https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authKey}&data=AP01`;

function onChange() {

}

export default function Currency() {
  return (
    <div>
      <p>
        <span>환전 금액: </span>
        <input/>
      </p>
      <p>
        <span>환전 통화: </span>
        <select name="currencyName" id="currencyName" onChange="onChange();">
          <option value="X" selected>--선택--</option>
        </select>
      </p>
      <button>환전하기</button>
    </div>
  );
}
