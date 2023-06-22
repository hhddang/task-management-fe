import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Task from "components/task/Task";

describe("Component: Task", () => {
  const data = {
    id: 52,
    name: "progress2",
    content: "todo",
    status: "in_progress",
    is_prioritized: true,
    project: "Build Todo App",
    creator: "dat",
    participant: null,
  };
  const theme = "red";
  const onEditTask = jest.fn();
  const onDeleteTask = jest.fn();

  it("Render", () => {
    // Arrange
    render(
      <Task
        data={data}
        theme={theme}
        onEdit={onEditTask}
        onDelete={onDeleteTask}
      />
    );
    const name = screen.getByText("progress2");

    // Assert
    expect(name).toBeInTheDocument();
  });

  it("Click edit button", () => {
    // Arrange
    render(
      <Task
        data={data}
        theme={theme}
        onEdit={onEditTask}
        onDelete={onDeleteTask}
      />
    );
    const editBtn = screen.getByText("Edit");

    //Act
    fireEvent.click(editBtn);

    // Assert
    expect(onEditTask).toBeCalledTimes(1);
  });

  it("Click delete button", () => {
    // Arrange
    render(
      <Task
        data={data}
        theme={theme}
        onEdit={onEditTask}
        onDelete={onDeleteTask}
      />
    );
    const deleteBtn = screen.getByText("Delete");

    //Act
    fireEvent.click(deleteBtn);

    // Assert
    expect(onDeleteTask).toBeCalledTimes(1);
  });
});
