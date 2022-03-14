import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders club sites", () => {
  render(<App />);
  const linkElement = screen.getByText(/club sites/i);
  expect(linkElement).toBeInTheDocument();
});
