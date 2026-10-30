// Demonstration logic only: no messages, persistence, scheduling, or client data.
export function nextAction(status, overdue) {
  if (!["new", "contacted", "quoted", "closed"].includes(status)) throw new TypeError("Unknown request status");
  if (typeof overdue !== "boolean") throw new TypeError("overdue must be a boolean");
  if (status === "closed") return "Closed — no follow-up due.";
  if (status === "quoted") return overdue ? "Review the quote and follow up with the customer." : "Wait until the agreed quote follow-up date.";
  if (status === "contacted") return "Confirm the job details and prepare the next step.";
  return overdue ? "Request needs attention — assign someone to reply." : "Review the request and contact the customer.";
}
