import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Panel from "components/task/Panel";

describe("Component: Panel", () => {
  const name = "Test Project";
  const theme = "red";
  const taskList = [
    {
      id: 52,
      name: "progress2",
      content: "todo",
      status: "in_progress",
      is_prioritized: true,
      project: "Build Todo App",
      creator: "dat",
      participant: null,
    },
    {
      id: 55,
      name: "testTask3",
      content: "todo",
      status: "in_progress",
      is_prioritized: false,
      project: "Build Todo App",
      creator: "dang",
      participant: null,
    },
  ];
  const onAddTask = jest.fn();
  const onEditTask = jest.fn();
  const onDeleteTask = jest.fn();

  it("Render", () => {
    // Arrange
    render(
      <Panel
        name={name}
        theme={theme}
        taskList={taskList}
        onAddTask={onAddTask}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
      />
    );
    const title = screen.getByText("Test Project");

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("Click add button", () => {
    // Arrange
    render(
      <Panel
        name={name}
        theme={theme}
        taskList={taskList}
        onAddTask={onAddTask}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
      />
    );
    const plus = document.getElementsByTagName("img")[0];

    //Act
    fireEvent.click(plus);

    // Assert
    expect(onAddTask).toBeCalledTimes(1);
  });
});
