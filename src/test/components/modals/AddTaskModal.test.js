import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTaskModal from "components/modals/AddTaskModal";

describe("Component: Add Task Modal", () => {
  const isShowed = true;
  const statusList = [
    { name: "New", theme: "gray", value: "new" },
    { name: "Ready", theme: "orange", value: "ready" },
  ];
  const handleCloseModal = jest.fn();
  const handleRefresh = jest.fn();
  const projectName = "Test Project";

  it("Render", () => {
    // Arrange
    render(
      <AddTaskModal
        isShowed={isShowed}
        statusList={statusList}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
        projectName={projectName}
      />
    );
    const title = screen.getByText("Create New Task");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Close Modal", () => {
    // Arrange
    const handleClose = jest.fn();

    // Act
    render(
      <AddTaskModal
        isShowed={isShowed}
        statusList={statusList}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
        projectName={projectName}
      />
    );
    const blur = document.getElementsByClassName("blur")[0];
    fireEvent.click(blur);

    // Assert
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });
});
