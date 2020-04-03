const authKey = 'VFLd2hbXHzciwgwcVXyXd81BFYpZD64M';
const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authKey}&data=AP01`;
let currencyInfo = [];

fetch(url, { mode: 'no-cors' })
  .then((response) => {
    response.text();
  })
  .then((data) => (
    (data ? JSON.parse(data) : {})
  ))
  .then((data) => {
    currencyInfo = data.json();
  })
  .catch((error) => {
  });

export default currencyInfo;
