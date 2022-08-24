import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("React App", () => {
  test("renders text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Google/i);
    expect(linkElement).toBeInTheDocument();
  });
});
