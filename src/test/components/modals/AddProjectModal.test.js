import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddProjectModal from "components/modals/AddProjectModal";

describe("Component: Add Project Modal", () => {
  const isShowed = true;
  const handleCloseModal = jest.fn();
  const handleRefresh = jest.fn();

  it("Render", () => {
    // Arrange
    render(
      <AddProjectModal
        isShowed={isShowed}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
      />
    );
    const title = screen.getByText("Add New Project");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Close Modal", () => {
    // Arrange
    render(
      <AddProjectModal
        isShowed={isShowed}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
      />
    );
    const blur = document.getElementsByClassName("blur")[0];

    // Act
    fireEvent.click(blur);

    // Assert
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });
});
