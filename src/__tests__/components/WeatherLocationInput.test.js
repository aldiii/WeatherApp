import React from "react";
import WeatherLocationForm from "../../components/WeatherLocationForm";
import renderer from "react-test-renderer";

let inputRenderer = null;

describe("<WeatherLocationInput/>", () => {
  beforeEach(() => {
    inputRenderer = renderer.create(<WeatherLocationForm />);
  });
  it("renders input element", () => {
    expect(inputRenderer.toJSON().children[0].children[2].type).toEqual(
      "input"
    );
  });
  it("has proper className", () => {
    expect(inputRenderer.toJSON().props).toMatchObject({
      className: expect.stringMatching(/weatherLocationForm/),
    });
  });
});
