import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditTaskModal from "components/modals/EditTaskModal";

describe("Component: Edit Task Modal", () => {
  const isShowed = true;
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
  const handleCloseModal = jest.fn();
  const handleRefresh = jest.fn();
  const setSelectedTask = jest.fn();
  const statusList = [
    { name: "New", theme: "gray", value: "new" },
    { name: "Ready", theme: "orange", value: "ready" },
  ];

  it("Render", () => {
    // Arrange
    render(
      <EditTaskModal
        isShowed={isShowed}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
        statusList={statusList}
      />
    );
    const title = screen.getByText("Edit Task");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Close Modal", () => {
    // Arrange
    render(
      <EditTaskModal
        isShowed={isShowed}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        handleCloseModal={handleCloseModal}
        handleRefresh={handleRefresh}
        statusList={statusList}
      />
    );

    // Act
    const blur = document.getElementsByClassName("blur")[0];
    fireEvent.click(blur);

    // Assert
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });
});
