import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { EditButton } from "../components/buttons/EditButton";
import userEvent from "@testing-library/user-event";

describe("EditButton", () => {
  beforeEach(() => {
    render(<EditButton />);
  });

  it("should toggle edit mode", async () => {
    const user = userEvent.setup();
    const editButton = screen.getByRole("button");

    await user.dblClick(editButton);

    expect(screen.getByTestId("pencil-icon")).toBeInTheDocument();
    expect(document.designMode).toBe("off");

    // Activa el modo edición
    await user.click(editButton);

    expect(document.designMode).toBe("on");
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
});
