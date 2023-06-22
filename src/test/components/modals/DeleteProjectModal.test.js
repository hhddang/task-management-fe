import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteProjectModal from "components/modals/DeleteProjectModal";

describe("Component: Delete Project Modal", () => {
  const isShowed = true;
  const handleCloseModal = jest.fn();
  const handleRefresh = jest.fn();
  const project = {
    id: 48,
    name: "Test Project",
    description: "Try to add new project to database",
    owner: "hdang",
  };

  it("Render", () => {
    // Arrange
    render(
      <DeleteProjectModal
        isShowed={isShowed}
        project={project}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
      />
    );
    const title = screen.getByText("Delete Project");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Close Modal", () => {
    // Arrange
    render(
      <DeleteProjectModal
        isShowed={isShowed}
        project={project}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
      />
    );

    // Act
    const blur = document.getElementsByClassName("blur")[0];
    fireEvent.click(blur);

    // Assert
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });
});
