import { describe, it, expect } from "vitest";
import { bookingLink, BOOKING_URL } from "@/config/booking";

describe("bookingLink", () => {
  it("includes the class name for per-class booking", () => {
    expect(new URL(bookingLink("Strength Foundations")).searchParams.get("class")).toBe(
      "Strength Foundations",
    );
  });
  it("returns the plain booking page with no class", () => {
    expect(bookingLink()).toBe(new URL(BOOKING_URL).toString());
  });
});
