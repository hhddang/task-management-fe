import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectItem from "components/project/ProjectItem";

describe("Component: Project Item", () => {
  const project = {
    id: 48,
    name: "Test Project",
    description: "Try to add new project to database",
    owner: "hdang",
  };
  const handleDelete = jest.fn();
  const handleClick = jest.fn();
  it("Render", () => {
    // Arrange
    render(
      <ProjectItem
        project={project}
        handleDelete={handleDelete}
        onClick={handleClick}
      />
    );
    const title = screen.getByText("Test Project");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Click delete button", () => {
    // Arrange
    render(
      <ProjectItem
        project={project}
        handleDelete={handleDelete}
        onClick={handleClick}
      />
    );
    const trashIcon = document.getElementsByTagName("img")[0];

    //Act
    fireEvent.click(trashIcon);

    // Assert
    expect(handleDelete).toBeCalledTimes(1);
  });
});
