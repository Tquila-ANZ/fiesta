import 'react-native';
import React from 'react';
 import App from '../App';
import FiestaBtn from 'fiesta/tq-anz-button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

it('renders correctly', () => {
  const tree = renderer.create(
    <FiestaBtn />
  );
});

test('renders correctly', () => {
  const tree = renderer.create(<FiestaBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
