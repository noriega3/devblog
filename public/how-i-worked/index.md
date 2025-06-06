---
title: How I work(-ed)
date: '2025-06-07'
spoiler: How I've worked in different environments over my career (so far)
---

> **Note: Work in Progress - Last Updated: 2025-06-06**

I've gotten an interview question of "how do you like to work?" where I understood it as, how would you'd fit in their culture / work environment. I can't say this is an answer for it, but it reflects on how I've adapted to different situations.

---

## At the start:

In all my past roles, I’ve started slow with a exponential ramp up, to understand everything about a particular codebase, environment, PR review structure, QA, etc.  To combat this, I usually take after-hours (unpaid if hourly) to immerse myself in the code. 

#### Example: 

**Situation**: Within the homeassistant (open source smart home) codebase, there was one “integration” (a layer to connect a third party to the smart home) that needed upgrading. 

**Findings**: Written in python and open source, there were complex integrations, add-ons, and frontend pieces depending how you look at it.

**Approach to learn**: Read over documentation, scoped to my use-case. Focused on looking and dissecting similar integrations, used the debugger, reviewed past discussions on forums, older PRs, their documentation on a quality scale (basically a checklist of a great integration).

**Solution(pending)**: Currently have some PRs in review, one was rejected for being too large (understandable) that bumped the code quality, so reduced it to the minimum to update the integration to work again.

---

#### Example:

**Solution**: Starting a SWE platform role at an agile development shop 

**Approach to learn**:  Use a local copy on my development machine to test, break, debug (with breakpoints) it to understand how it works.  Look at previous bug/tickets from prior sprints to understand cadence, and how open to criticism some PRs or tickets were to resolution. 

**Findings**: As the month progressed, I made sure to ask questions, referencing to past issues and PRs to get better context of things outside the ticket, sort of how I found the QA issue (below example).  

**Results**: Progressed into month 2, good feedback from peers.

---

#### Example:

**Solution**: Creating own value / Starting at a mobile startup with no exact focus

**Approach to learn**: Same at SWE at a development shop, but with an addition of a marketing-like approach to see myself in the shoes of the user. Reviewed/added detailed analytics to the mobile platform

**Findings**: Pinpointed key metrics to monitor and bugs applications would sometimes face. 

**Results**: For the ‘ultimate’ mobile app, establishing a list of what makes previous apps successful would serve as a baseline (ticket list) of what all needs to happen.  Having analytics w/ error reporting also served as finding bugs.

---

## By month 2-3:

Contribute meaningful work with the suggestion/addition of improving other processes 

#### Example: 

**Situation**: QAs on the team would reject multiple tickets outside the scope of work.

**Findings**: Through talks and genuinely friending them, found there was a stigma of QAs being considered rejected software engineers. There was a hypotheical tug of war of who holds power and not being included in many SWE timelines.

**Solution**: Mended the bridge between the two teams through treating them as equals, encouraging 1:1 talks with assinged SWE and QA instead of these two teams feeling as silos.

**Results**:  The two teams respecting each other, including a QA rep in on incoming sprint planning. QAs became a part of SWE activities and were able to point out problems before they would happen and notice patterns of bugs/rejections that they could freely bring up.

---
#### Example:

**Situation**: At a mobile app startup, needed a way to automate the deployment of an application across multiple on-hand physical mobile devices.

**Findings**: There were things like ADB for android, but the current version didn’t allow an hands-off approach where bash scripting would often break.  Found an open-source tool that could push to all the devices on hand.

**Solution**: Integrated a open source platform, setup a dedicated server that would perform the task on commit to a particular branch after looking through documentation, and teaching others on how to use it.

**Results**: Was able to create this process and automated phone deployments.
