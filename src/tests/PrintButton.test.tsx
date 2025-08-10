import { beforeEach, describe, expect, it, vi } from "vitest";
import { PrintButton } from "../components/buttons/PrintButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { useReactToPrint } from "react-to-print";

const mockContentRef = { current: null };

const mockPrintFn = vi.fn();

vi.mock("react-to-print", () => ({
  useReactToPrint: () => mockPrintFn,
}));

describe("PrintButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<PrintButton contentRef={mockContentRef} />);
  });

  it("should render Print PDF", () => {
    expect(screen.getByText(/Print PDF/i)).toBeInTheDocument();
  });

  it("should call reactToPrintFn when clicked", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(mockPrintFn).toHaveBeenCalledOnce();
  });
});
