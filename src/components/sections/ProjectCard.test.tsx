import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

const project: Project = {
  id: "demo",
  title: "Demo Project",
  description: "A short description.",
  tags: ["Web", "Corporate"],
  status: "in-progress",
};

describe("ProjectCard", () => {
  it("renders title, description and tags", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole("heading", { name: "Demo Project" })).toBeInTheDocument();
    expect(screen.getByText("A short description.")).toBeInTheDocument();
    expect(screen.getByText("Web")).toBeInTheDocument();
    expect(screen.getByText("Corporate")).toBeInTheDocument();
  });

  it("shows the visitor-facing status label", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText("Devam Ediyor")).toBeInTheDocument();
  });

  it("shows no status badge when the project has no status", () => {
    render(<ProjectCard project={{ ...project, status: undefined }} />);
    expect(screen.queryByText("Devam Ediyor")).not.toBeInTheDocument();
  });
});
