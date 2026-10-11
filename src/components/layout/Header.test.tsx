import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./Header";

// The header reads the current route; tests pretend we are on the home page.
vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

describe("Header", () => {
  it("shows the owner's name", () => {
    render(<Header />);
    expect(screen.getByText("Alaeddin Durak")).toBeInTheDocument();
  });

  it("opens and closes the mobile menu with the hamburger button", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("navigation", { name: "Mobil menü" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Menüyü aç" }));
    expect(screen.getByRole("navigation", { name: "Mobil menü" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Menüyü kapat" }));
    expect(screen.queryByRole("navigation", { name: "Mobil menü" })).not.toBeInTheDocument();
  });

  it("marks the current page link", () => {
    render(<Header />);
    const current = screen.getAllByRole("link", { name: "Ana Sayfa" })[0];
    expect(current).toHaveAttribute("aria-current", "page");
  });
});
