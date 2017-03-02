import React, { PropTypes } from 'react';
import All from 'react-native';
import { button } from './Button.style';

export default function Button({ title, onPress }) {
  return (
    <All.Button {...{ title, onPress }} style={button} />
  )
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  title: "Button",
  onPress: () => console.log('button clicked'),
};
