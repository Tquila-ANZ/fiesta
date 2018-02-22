import "react-native";
import React from "react";
import FiestaBtn from "fiesta/tq-anz-button";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<FiestaBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
