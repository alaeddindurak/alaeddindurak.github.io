import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = "light";
    localStorage.clear();
  });

  afterEach(() => {
    delete document.documentElement.dataset.theme;
  });

  it("switches to the dark theme and remembers the choice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Koyu temaya geç" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(screen.getByRole("button", { name: "Açık temaya geç" })).toBeInTheDocument();
  });

  it("switches back to the light theme", async () => {
    document.documentElement.dataset.theme = "dark";
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Açık temaya geç" }));

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
