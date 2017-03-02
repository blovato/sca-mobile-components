import 'react-native';
import React from 'react';
import Button from './Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders default props', () => {
  const button = renderer.create(
    <Button />
  ).toJSON();

  expect(button).toMatchSnapshot();
});

it('renders passed props', () => {
  const button = renderer.create(
    <Button title="Test button" onPress={() => {}} />
  ).toJSON();

  expect(button).toMatchSnapshot();
});
