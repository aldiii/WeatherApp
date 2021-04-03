import { render, screen } from "@testing-library/react";
import App from "../../components/App";

test("renders Weather App header", () => {
  render(<App />);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});
