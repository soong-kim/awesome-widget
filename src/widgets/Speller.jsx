import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const url = (v) => (
  `https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?_callback=jQuery11240719486938057057_1586303742245&q=${v}&where=nexearch&color_blindness=0&_=1586303742246`
);

export default function Speller() {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [value, setValue] = useState('');
  const onClick = () => {
    setLoading(true);
    window.console.log(value);
    fetch(url(value))
      .then((res) => res.text())
      .then((text) => {
        const str = text.match(/notag_html":".*"/g)[0].match(/:".*"/g)[0];
        setResult(str.slice(2, str.length - 1));
        setLoading(false);
      });
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const renderSpinner = () => (
    <Spinner
      as="span"
      animation="border"
    />
  );

  return (
    <Container>
      <Form>
        <Form.Label>
          맞춤법/문법
        </Form.Label>
        <Form.Control
          placeholder="검사할 문장을 입력하세요"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          {`글자수: ${value.length}`}
        </Form.Text>
      </Form>
      <Button
        type="submit"
        onClick={onClick}
        disabled={isLoading}
        style={{
          width: '6rem',
          height: '3rem',
        }}
      >
        {isLoading ? renderSpinner() : '검사하기'}
      </Button>
      <div>
        <h4>
          {result}
        </h4>
      </div>
    </Container>
  );
}
