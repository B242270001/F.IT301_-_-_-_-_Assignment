import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageState from "../PageState";

afterEach(cleanup);

const renderState = (props) =>
  render(
    <MemoryRouter>
      <PageState {...props} />
    </MemoryRouter>,
  );

describe("PageState", () => {
  it.each([
    ["loading", "Ачаалж байна…", "status"],
    ["empty", "Мэдээлэл алга байна.", null],
    ["error", "Алдаа гарлаа.", "alert"],
    ["not-found", "Олдсонгүй.", null],
    ["forbidden", "Энэ хуудсыг үзэх эрхгүй.", null],
  ])("renders state-%s with a default message", (type, message, role) => {
    renderState({ type });

    const state = screen.getByTestId(`state-${type}`);
    expect(state.textContent).toBe(message);
    expect(state.getAttribute("role")).toBe(role);
  });

  it("runs the button action", () => {
    const retry = vi.fn();
    renderState({ type: "error", message: "Чансааг ачаалж чадсангүй.", actionLabel: "Дахин оролдох", onAction: retry });

    fireEvent.click(screen.getByRole("button", { name: "Дахин оролдох" }));
    expect(retry).toHaveBeenCalledOnce();
  });

  it("renders a link action", () => {
    renderState({ type: "not-found", actionLabel: "Хичээлийн сан руу", actionTo: "/explore" });

    expect(screen.getByRole("link", { name: "Хичээлийн сан руу" }).getAttribute("href")).toBe("/explore");
    expect(screen.queryByRole("button")).toBeNull();
  });
});
