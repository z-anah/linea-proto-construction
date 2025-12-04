Tuesday, Nov 25
PL
Pat Laureano
3:48 AM
Hi Anah! As you work through the front end updates (and settle in Tunisia!), just a heads up I’m going to provide some requirements and description for a UX prototype tomorrow.



I’ll also provide a more holistic update on the product and where we’re going. Just wanted to give you an update

And heads up. Perhaps mocking up the UX without folding into the main project base might be better as we iterate through it. I’ll provide more details

PL
Pat Laureano
9:56 PM
Hi Anah. Hope you've been settling in well in Tunisia and updates have been going well!



Just sharing a long overdue summary of the product. Why this matters and what we're building. Please feel free to ask any questions to clarify the direction we're building in!



INDUSTRY BACKGROUND
The construction industry has been bogged down by administrative tasks and paperwork for decades. And this hasn’t gotten any better with software. The industry continues to throw more people and software at the problem.
This is due to an outdated assumption that construction is "knowledge work" that happens at a desk. It isn’t. Competitors keep building bigger dashboards and more complex platforms. Users, such as project managers and coordinators, essentially become data-entry clerks. The role of a coordinator is literally to act as a bridge between the job site and the software database.
We believe this can change now with the introduction of LLMs. Instead of people changing their workflows to suit the software, the software can work for them, and take over these mundane, repetitive administrative tasks.



VISION
Construction is complex. Building in physical space is hard and is an amazing human feat. We want to empower people in Construction to leverage their skills, experience, and talent to focus on the unique human problems of construction. We do this by eliminating “human middleware” roles, where people are just bridging the gap between the real world and software. We automate the workflows that are not additive to the construction process, and allow construction teams to interact naturally with software using the channels that work for them (e.g., email, text, voice).



PRODUCT
We’re developing an AI project coordinator that acts as a layer between the construction team and their software. This AI layer is developed specifically to handle the following categories:
1. Data Entry: Moving information from unstructured formats (PDFs/Emails) into structured systems (ERPs/SaaS).
2. External Follow-ups: The repetitive "chasing" of trades and vendors for quotes, submittals, or confirmations.
3. Form Completion: Taking data and populating standardized templates or forms.



The AI project coordinator will be adept at handling these tasks consistently and reliably.
Since every company’s workflows are different, there will be flexibility to customize each of these tasks to match how the company operates. For example:
- Configuring what data or information to extract from an email/PDF/document
- Setting which form templates need to be populated
- Pointing the AI to the destination software to retrieve or enter data into
- Configuring what to follow-up with third-parties and how often to do that

Wednesday, Nov 26
PL
Pat Laureano
4:24 AM
Hi Anah. Just wanted to share brainstorming and briefing for this prototype. A couple of notes
- If possible, I'd like to prioritize mockups for this over the frontend updates > if needed I'll use screenshots when speaking to leads to gauge feedback/reception
- Lowest friction way to mockup is fine, even if it's just in Figma. Does not need to be a functional prototype



Objective
Design a workflow builder (similar to Relay.app or Zapier for example) that allows business users to build AI workflows. The key difference is this is not a general-purpose workflow builder. I like the layout of general tools like Zapier, but this is intended to have specific guardrails. Users can only build with actions serving 4 workflow patterns. The overall actions in each workflow will be limited but there is flexibility to configure each step so users can customize it to their process.



4 Workflows
1. Data Entry. E.g., extract data from an input (email, PDF) and enter into a system (ERP, SaaS)
2. Populate form. Gather data, retrieve form template, duplicate, populate, send
3. Follow-up Reminders. Send follow-ups to internal team or external team based on a schedule
4. Track responses. Categorize received emails and track against follow-up checklists



In each step, the user selects from a limited list of actions available (e.g., "Read Email," "Search Procore," "Update Row"). Each step/action can be configured with a natural language instruction, and dropdowns where appropriate (e.g., select system).



I've added my idea on how this layout could look, along with an example and a couple of reference screenshots. Please note we do not need to follow this layout or examples. I would like to lean on your design perspective and experience on the best UX for what we're trying to achieve. I'm open to your input.



In terms of timing, I know you're busy supporting your brother's family. Just to set expectations, please let me know what would be reasonable (e.g., end of week) to have some initial designs or layouts I could potentially use as screenshots.



And as always, please let me know if you have any questions!

Relay.app: Create AI agents that work for you
Relay.app is a platform to create AI agents that work for you across 100+ apps.
Workflow Design Concept.jpg 
Workflow Design Concept.jpg

PL
Pat Laureano
12:03 AM
Did some brainstorming with the team. We wanted to try and bridge the step that users understand (text-based instructions) and how it translates over to these workflow steps.



We added a third pane on the left that is a free form textbox to hold the instructions (SOP) similar to what we already have under our PROCESS DETAILS.



Attached is an updated visual and hopefully that makes sense!

Workflow Design Concept_Nov-26.jpg 
Workflow Design Concept_Nov-26.jpg
Friday, Nov 28
PL
Pat Laureano
4:22 PM
Hi Anah. Just checking in on how you've been making with those mockups and if you had any questions. Thanks!

PL
Pat Laureano
12:15 AM
Hi Anah. Please find feedback below for the mockup. See attached



I've attached a screenshot of what we were envisioning the middle column to look like. It does not need to be editable, but just to display the workflow and steps cleanly. I'm open to suggestions on other ways to show this

2 files 
image.png
image.png
If easier, I can define the steps for each workflow (e.g., data entry, follow-up, form population)

PL
Pat Laureano
2:08 PM
I was going to do a nice template for the steps for each type, but I'll just provide them here to start



DATA ENTRY
1. Read email and attachments (trigger)
2. Gather and check information
3. Find additional information (optional)
4. Enter information into system



COMPLETE FORMS
1. Receive request from team member (trigger)
2. Find and copy form template
3. Find additional information (optional)
4. Fill out form
5. Save and send



FOLLOW-UP
1. Receive request form team member (trigger)
2. Determine the type of follow-up
3. Find follow-up contacts
4. Schedule reminder

I'll send a more complete design with the configs for each step. Thanks!


Zaora Zulmianah Anah
4:56 PM
Also, everything is currently static

PL
Pat Laureano
5:00 PM
That's no problem. It's more the view we were looking for. No need it for it to be editable (e.g., changing order). Adding / removing is possibly useful, but we might be able to make it work with just a disable toggle on the config panel

For example, each Type has the maximum steps (5) but we can disable optional ones

People are having a difficult time understanding how they "onboard" and get started with our platform. I want to make it very simple, give us your instructions, describe it, and then we'll process it

Zaora Zulmianah Anah
5:02 PM
That makes sense

PL
Pat Laureano
5:11 PM
My idea is to be able to take this, sit down with a user, and have them describe the process (e.g., natural language). Then when they hit the "Process" button, we'll send it to our back end and have it auto-populate the steps, instructions (a bit of a magical moment). Then we'll spend the last 5 minutes just tweaking the config panel (e.g., select which data to extract, which system to use)

So at a high-level that's why we're trying to do

Zaora Zulmianah Anah
5:52 PM
Got it, that makes total sense

PL
Pat Laureano
7:54 PM
This is the first one for Data Entry

image.png 
image.png
Let me know if this makes sense

The boxes on the left are the properties in the config panel. I've placed same data below

Zaora Zulmianah Anah
8:09 PM
How the app will simulate between wich type to display (data entry or comple forms or follow-up)?

PL
Pat Laureano
8:15 PM
I'm not familiar with the library, but could it work if there was a dropdown below the instructions on the left to select which type?