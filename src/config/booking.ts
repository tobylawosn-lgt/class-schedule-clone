// Replace with the real booking page (Calendly, Mindbody, etc.).
export const BOOKING_URL = "https://calendly.com/alex-moreno-coach";

export function bookingLink(className?: string, slot?: string): string {
  const url = new URL(BOOKING_URL);
  if (className) url.searchParams.set("class", className);
  if (slot) url.searchParams.set("slot", slot);
  return url.toString();
}
