import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { education } from "@/data/education";
import { Education } from "./Education";

describe("Education", () => {
  it("renders every school and programme", () => {
    render(<Education />);
    for (const item of education) {
      expect(screen.getByRole("heading", { name: item.title })).toBeInTheDocument();
      expect(screen.getByText(item.institution)).toBeInTheDocument();
    }
  });
});
