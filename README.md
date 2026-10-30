# Fieldwork — workflow proof
A small, reproducible demonstration of inquiry follow-up rules. This is the first source-controlled proof in this repository; it is **not the complete source of the deployed Fieldwork website**.

## Run
With Node.js 18 or later installed:
```sh
node --test proof/request-workflow.test.mjs
```

## Demonstrates
- Different next actions for New, Contacted, Quoted, and Closed requests.
- A simulated overdue flag.
- Closed-request follow-up suppression.
- Input validation and eight behavioral tests.

## Does not demonstrate
No production CRM, storage, timers, delivery, authentication, client engagement, revenue uplift, or customer results. The overdue flag is supplied by the caller; no clock or scheduler runs. Automated checks validate these rules only.

## Relation to Fieldwork
The locally prepared Fieldwork roofing concept includes a staff review and status interaction. This standalone module uses the same next-action rules with explicit input guards. The live website has not been updated by this commit. Production implementation requires confirmed scope, durable storage where needed, server validation, access controls, delivery verification, and failure handling.

## Demo script
Start with a fictional new inquiry. Mark it overdue, then contacted and quoted. Compare the quoted action before and after the due-date flag. Close the request and show that follow-up is suppressed.

Label this as a concept when sharing with prospective buyers.
