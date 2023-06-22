import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "components/header/Header";
import { BrowserRouter } from "react-router-dom";

describe("Component: Header", () => {
  it("Render", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const icons = document.getElementsByTagName("img");

    // Assert
    expect(icons.length).toBe(3);
  });
});
