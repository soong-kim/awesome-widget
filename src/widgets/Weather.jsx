import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaSearchLocation } from 'react-icons/fa';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

const apiKey = '00c48a84c8778fdb07c3b2a2eb16c189';

const requestWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return fetch(url).then((res) => res.json());
};

const WeatherView = ({ weather }) => {
  if (weather.cod === '404') {
    return (
      <h3>City Not Found.</h3>
    );
  }
  return (
    <Container>
      <Row>
        <h4>{`${weather.name}, ${weather.sys.country}`}</h4>
      </Row>
      <Row>
        <Col>
          <Image
            className="mx-auto d-block"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
        </Col>
        <Col className="my-auto">
          <h4>
            <Badge variant="primary">{`${weather.main.temp}°C`}</Badge>
          </h4>
          <p className="text-muted">{`feels like ${weather.main.feels_like}°C`}</p>
        </Col>
      </Row>
    </Container>
  );
};

WeatherView.propTypes = {
  weather: PropTypes.shape({
    cod: PropTypes.number.isRequired,
    name: PropTypes.string,
    sys: PropTypes.shape({ country: PropTypes.string }),
    weather: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.string })),
    main: PropTypes.shape({ temp: PropTypes.number, feels_like: PropTypes.number }),
  }).isRequired,
};

const InitialCity = 'Seoul';

const Weather = () => {
  const [city, setCity] = useState(InitialCity);
  const [weather, setWeather] = useState({ isLoaded: false });
  const fetchWeather = (ct) => {
    if (ct !== '') {
      requestWeather(ct).then((w) => setWeather({ isLoaded: true, ...w }));
    } else {
      requestWeather(InitialCity).then((w) => setWeather({ isLoaded: true, ...w }));
    }
  };
  useEffect(() => fetchWeather(''), []);

  return (
    <div>
      <Form as="div">
        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder={InitialCity}
              onChange={(e) => setCity(e.target.value)}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => fetchWeather(city)}
              >
                <FaSearchLocation />
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text className="text-muted">
            Current weather and forecasts in your city.
          </Form.Text>
        </Form.Group>
      </Form>
      {weather.isLoaded && <WeatherView weather={weather} />}
    </div>
  );
};

export default Weather;
