import test from "node:test";
import assert from "node:assert/strict";
import { nextAction } from "./request-workflow.mjs";
test("new request has a contact action", () => assert.match(nextAction("new", false), /contact the customer/));
test("overdue new request needs assignment", () => assert.match(nextAction("new", true), /assign someone/));
test("contacted request needs details", () => assert.match(nextAction("contacted", true), /Confirm the job details/));
test("quote waits before agreed date", () => assert.match(nextAction("quoted", false), /Wait until/));
test("overdue quote prompts follow-up", () => assert.match(nextAction("quoted", true), /follow up/));
test("closed requests suppress follow-up", () => {
  assert.equal(nextAction("closed", true), "Closed — no follow-up due.");
  assert.equal(nextAction("closed", false), nextAction("closed", true));
});
test("invalid status is rejected", () => assert.throws(() => nextAction("won", false), TypeError));
test("invalid overdue input is rejected", () => assert.throws(() => nextAction("new", "false"), TypeError));
