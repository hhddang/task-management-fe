import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteTaskModal from "components/modals/DeleteTaskModal";

describe("Component: Delete Task Modal", () => {
  const isShowed = true;
  const handleCloseModal = jest.fn();
  const handleRefresh = jest.fn();
  const selectedTask = {
    id: 52,
    name: "progress2",
    content: "todo",
    status: "in_progress",
    is_prioritized: true,
    project: "Build Todo App",
    creator: "dat",
    participant: null,
  };

  it("Render", () => {
    // Arrange
    render(
      <DeleteTaskModal
        isShowed={isShowed}
        selectedTask={selectedTask}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
      />
    );
    const title = screen.getByText("Delete Task");

    // Act

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Close Modal", () => {
    // Arrange
    render(
      <DeleteTaskModal
        isShowed={isShowed}
        selectedTask={selectedTask}
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
