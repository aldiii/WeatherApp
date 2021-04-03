import React from "react";
import WeatherLocationInput from "../../components/WeatherLocationInput";
import renderer from "react-test-renderer";

let inputRenderer = null;

describe("<WeatherLocationInput/>", () => {
  beforeEach(() => {
    inputRenderer = renderer.create(<WeatherLocationInput />);
  });
  it("renders input element", () => {
    expect(inputRenderer.toJSON().children[0].children[2].type).toEqual(
      "input"
    );
  });
  it("has proper className", () => {
    expect(inputRenderer.toJSON().props).toMatchObject({
      className: expect.stringMatching(/weatherLocationInput/),
    });
  });
});
