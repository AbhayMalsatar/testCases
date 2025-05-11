import { it, expect, describe, vitest, vi } from "vitest";
import Login from "../src/component/Login";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import React, { useEffect } from "react";

describe(Login, () => {
  it("Should render name Abhay which was given from the props", () => {
    render(<Login name="Abhay" />);
    const heading = screen.getAllByRole("heading")[0];
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Abhay/i);
  });

  it("Should render Login button when name is not provide", () => {
    render(<Login />);
    const button = screen.getAllByRole("button")[0];
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/);
  });

  it("should not call console.log", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {
      throw new Error("Unexpected console.log");
    });

    expect(() => render(<Login />)).not.toThrow();

    consoleSpy.mockRestore();
  });

  it("should not call window.addeventlisstner", () => {
    const addEventListenerSpy = vi
      .spyOn(window, "addEventListener")
      .mockImplementation(() => {
        throw new Error("Unexpected addEventListener");
      });

    expect(() => render(<Login />)).not.toThrow();

    addEventListenerSpy.mockRestore();
  });

  it("should not use a <input> tag", () => {
    render(<Login />);
    const input = screen.queryByRole("textbox");
    console.log(input);
    expect(input).toBeNull(); // test fails if a button is present
  });

  it("should not have inline function inside the any handler", () => {
    // Render the component
    const { container } = render(<Login />);

    // Use regex to check if any inline arrow function exists in the event handlers
    const inlineFunctionPattern = /\(\)\s*=>\s*{/;
    console.log(container.querySelector("button").onclick.toString())
    const hasInlineFunction = inlineFunctionPattern.test(container.innerHTML);

    // Assert that no inline function is used in the onClick handler
    expect(hasInlineFunction).toBe(false);
  });
});
