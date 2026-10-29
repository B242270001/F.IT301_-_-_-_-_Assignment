import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import Toast from "../Toast";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Toast", () => {
  it("announces the message and closes itself after the duration", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(<Toast message="Лекц хадгалагдлаа." onClose={onClose} />);

    const toast = screen.getByTestId("toast-success");
    expect(toast.getAttribute("role")).toBe("status");
    expect(toast.textContent).toBe("Лекц хадгалагдлаа.");

    act(() => vi.advanceTimersByTime(2999));
    expect(onClose).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("supports an error tone", () => {
    render(<Toast message="Хадгалж чадсангүй." tone="error" onClose={() => {}} />);

    expect(screen.getByTestId("toast-error").className).toBe("toast is-error");
  });
});
