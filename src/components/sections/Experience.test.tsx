import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { experience } from "@/data/experience";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("lists every position with its role, company and period", () => {
    render(<Experience />);
    for (const item of experience) {
      expect(screen.getByRole("heading", { name: new RegExp(item.role) })).toBeInTheDocument();
      expect(screen.getByText(item.company)).toBeInTheDocument();
      expect(screen.getByText(item.period)).toBeInTheDocument();
    }
  });

  it("lists the highlights of a position", () => {
    render(<Experience />);
    const withHighlights = experience.find((item) => item.highlights?.length);
    expect(screen.getByText(withHighlights!.highlights![0])).toBeInTheDocument();
  });

  it("marks the current position", () => {
    render(<Experience />);
    expect(screen.getByText("Güncel")).toBeInTheDocument();
  });
});
