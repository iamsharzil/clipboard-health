# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Update Agent Table in the Database to add `custom_id` field

**Description:**

> The reports generated has an internal database id as the Agent's Id. To allow Facilities to add their own custom ids for each Agent, a new field `custom_id` needs to be added in the Agent table in the database.

**Acceptance Criteria:**

- A new field named `custom_id` should be added to the Agent table.
- The `custom_id` field should accept alphanumeric values.
- The `custom_id` should have a max limit. (considering 50 characters)
- The `custom_id` field should be initially null, as Facilities may choose not to provide a custom id for an Agent.
- The existing functionality of the application should not be affected.

**Effort Estimate:**

> As this task requires making changes to the database schema and updating any affected components. It is estimated to take approximately 3-5 hours.

**Implementation Details:**

- Add the `custom_id` column in the Agent table in the database schema.
- Modify the relevant API endpoints/database queries to retrieve and update the `custom_id` field.
- Update any affected components, such as the `generateReport` function, to use the `custom_id` instead of the internal database id when generating reports.

## Ticket 2: New Facilty interface to manage custom Agent ids

**Description:**

> A new user interface needs to be created for Facilties to allow add/update/remove custom ids for the Agents they work with.

**Acceptance Criteria:**

- A new Page should be created within the Facility interface to add custom Agent ids.
- The Page should allow Facilities to add custom id when any Agent is selected from the Agent's list or by typing the Agent in the search bar (for quick access).
- The Page should be able to show existing internal database id if custom Agent id is not present.
- Facilities should be able to update an existing custom id for an Agent.
- The Page should have an option for Facilities to remove a custom id for an Agent, reverting back to using the internal database id.
- The Page should handle any validation or error scenarios accordingly.
- An error message to be shown if the custom id is already used.
- Changes made to custom ids should be persisted in the database and reflected in the reports generated for Facilities.

**Effort Estimate:**

> As this task involves designing a new User Interface and an API integration, it is estimated to take approximately 8-12 hours.

**Implementation Details:**

- Design and create a new page in the Facility interface to manage custom Agent ids.
- Implement functionality to retrieve the list of Agents from the database and populate them on the page or when it's type on the search bar.
- The search bar should have debouncing to avoid making API calls to fetch Agents on each key stroke.
- Implement functionality to add, update, and remove custom ids for Agents, including proper validation and error handling.
- Update the backend API endpoints to handle requests related to managing custom Agent ids.
- Integrate the API's in the new UI to ensure changes made by Facilities are persisted in the database.

## Ticket 3: Update report generation to use custom Agent ids

**Description:**

> Currently, the reports generated for Facilities use the internal database ids of Agents. We need to update the report generation process to use the custom ids provided by Facilities, if available, instead of the internal database ids.

**Acceptance Criteria:**

- The `generateReport` function should be modified to use the custom ids of Agents when generating reports.
- If a custom id is available for an Agent, it should be used in the report.
- If a custom id is not available, the internal database id should be used as a fallback.
- The generated reports should reflect the custom ids

**Effort Estimate:**

> This task involves modifying the report generation logic and ensuring that the custom ids are correctly used in the generated reports. It is estimated to take approximately 2-3 hours.

**Implementation Details:**

- Modify the `generateReport` function to include logic for retrieving and using custom Agent ids.
- Retrieve the list of Shifts for the given quarter, including the metadata about the assigned Agent.
- For each Shift, check if the assigned Agent has a custom id.
- If a custom id is available, use it in the report instead of the internal database id.
- If a custom id is not available, fall back to using the internal database id.
- Update the report generation process to include the custom ids in the appropriate sections or columns of the report.
- Test the report generation with different scenarios to ensure the custom ids are correctly used.
- Ensure that the reports are generated in the desired format (e.g., PDF) and can be submitted by the Facility for compliance.
