import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { skills } from "@/data/skills";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders one card per skill", () => {
    render(<Skills />);
    for (const skill of skills) {
      expect(screen.getByRole("heading", { name: skill.title })).toBeInTheDocument();
    }
  });

  it("links to the work page", () => {
    render(<Skills />);
    expect(screen.getByRole("link", { name: /Tüm çalışmalarımı gör/ })).toHaveAttribute("href", "/projects");
  });
});
