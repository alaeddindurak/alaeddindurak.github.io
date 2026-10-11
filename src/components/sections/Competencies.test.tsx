import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { competencies } from "@/data/competencies";
import { Competencies } from "./Competencies";

describe("Competencies", () => {
  it("renders each group with all of its items", () => {
    render(<Competencies />);
    for (const group of competencies) {
      expect(screen.getByRole("heading", { name: group.title })).toBeInTheDocument();
      for (const item of group.items) {
        expect(screen.getByText(item)).toBeInTheDocument();
      }
    }
  });
});
