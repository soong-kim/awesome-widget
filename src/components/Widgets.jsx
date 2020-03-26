import React from 'react';
import PropTypes from 'prop-types';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

const Widget = (widget, Header) => (
  <Card>
    <Card.Header as="H5">{Header}</Card.Header>
    <Card.Body>
      {widget}
    </Card.Body>
  </Card>
);

const Widgets = ({ children }) => (
  <CardColumns className="p-3">
    {React.Children.map(children, (child) => Widget(child, child.type.name))}
  </CardColumns>
);

Widgets.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Widgets;
