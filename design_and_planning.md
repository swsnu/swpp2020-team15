# stockin': Design and Planning

## Document Revision History
   Rev. 1.0 YYYY-MM-DD - initial version

## System Architecture<br />
Here you should describe the **high-level architecture** of your system: the major pieces and how they fit together. Use graphical notations as much as possible in preference to English sentences. For example, you could describe the architecture using UML, if your system lends itself to these descriptions. Try to use standard architectural elements (e.g., pipe-and-filter, client-server, event-based, model-view-controller). Make sure to describe the major interfaces between components, which you will describe in more detail in the "Design details" section below.

***
## Design Details(When finished, erase this)<br />
In this section go those important facets that are not at the level of “architecture,” such as descriptions of critical algorithms, protocols, and key invariants. Also, wherever possible items should be linked back to your specification. Ideally, you can match up everything in the specification with where it is implemented in the design.

We expect that once this document is completed you will split into subteams to implement the various major components. To be ready for such a split, you need to have a precise idea of how the components are interacting, and how you are going to start implementing them. A complete class-level design might not be always possible so early, but you need to specify at least the API among the major components. Use UML when appropriate.

If there are messages sent between clients and servers, you should identify **what messages and what data they contain, and in what format, and in what order they should be sent.**

We expect to see a more refined design for the features to be included in the current sprint, and perhaps a more rough design for the features to be implemented in future sprints.  

If you have considered alternative designs, please describe briefly your reasons for choosing the final design.
***

## Model
**Write Here**

## View
#### 0. Headers and footers
##### HEADER 1
- If the user clicks on Report button, he/she is navigated to Report Page.
- If the user clicks on My Page button, he/she is navigated to My Page.
- If the user clicks on Logout button, he/she is navigated to Prelogin Page.
- If the user enters some text on the search input, related results appear on the bottom.
- If the user clicks on one of the results, he/she is navigated to Detail Page of the corresponding stock.  
##### FOOTER
- If the user clicks on twitter icon, he/she is navigated to the twitter page of the team.
- If the user clicks on facebook icon, he/she is navigated to the facebook page of the team.
- If the user clicks on linked-in icon, he/she is navigated to the linked-in page of the team.
- If the user clicks on Home button, he/she is navigated to Main Page.
- If the user clicks on Report button, he/she is navigated to Report Page.
- If the user clicks on My Page button, he/she is navigated to My Page.
- If the user clicks on About Us button, he/she is navigated to AboutUs Page.

#### 1. Prelogin page
- Left half lets user sign in with his/her account
   - If the user clicks on Login button, user is navigated to Main Page.
   - If the user clicks on Sign Up button, Sign Up Modal shows up.
- Right half displays introduction of the service
   - Introductory explanation of stockin' is displayed as a default.
   - If the user clicks on STOCKIN button, introductory explanation of stockin' is displayed on the right side.
   - If the user clicks on About us button, brief introduction of team 15 is displayed on the right side.
   - If the user clicks on Preview button, peek view of the service is displayed on the right side.

#### 2. Main Page
- **HEADER 1** is displayed on the top.
- As a default, brief report on the stock market as a whole is displayed below the header.
- Brief report of the few selected stocks is displayed as a clickable component.
- If the user clicks on Daily Report button, brief report on the stock market as a whole is displayed.
   - To-rise stocks are displayed on the top row, and to-fall stocks are displayed on the bottom row.
   - If the user clicks on one of the clickable components, he/she is navigated to corresponding Detail Page.
- If the user clicks on My Interests button, brief report on the selected stocks is displayed.
   - To-rise stocks are displayed on the top row, and to-fall stocks are displayed on the bottom row.
   - If the user clicks on one of the clickable components, he/she is navigated to corresponding Detail Page.
- **FOOTER** is displayed on the bottom.

#### 3. Report Page
- **HEADER 1** is displayed on the top.
- Right below the header, time when the information was lastly updated is displayed.
- Below the time, as a default, slightly elaborated information about to-rise stocks is displayed.
   - To-rise stocks are sorted in an ascending order of ranking based on scores by ML trained model.
- If the user clicks on To-rise button, slightly elaborated information of stocks estimated to show a rise is shown.
- If the user clicks on To-fall button, slightly elaborated information of stocks estimated to show a fall is shown.
- If the user enters some text on the search input, related results appear on the bottom.
- If the user clicks on one of the results, slightly elaborated information of corresponding stock is displayed instead of sorted information of stocks in an ascending order.
- If the user clicks on the calendar icon, DatePicker popup shows up, showing current month's calendar.
   - If the user clicks on a certain date, report page of the date is displayed.
   - If the user clicks on the right-arrow button, next month's calendar is displayed on the popup.
   - If the user clicks on the left-arrow button, previous month's calendar is displayed on the popup.
   - If the user clicks on Today button, report page of today is displayed.
- If the user clicks on the following parts of a stock, he/she is navigated to Detail Page of the corresponding stock.
   - name of the stock
   - ranking of the stock
   - graph image of the stock
   - score of the stock
   - news analysis result of the stock
   - text 'noticeable news' of the stock
- **FOOTER** is displayed on the bottom.

## Controller
![Frame 2](https://user-images.githubusercontent.com/59424336/97441314-edfe6780-196b-11eb-9fb6-6672c8eb5490.jpg){: width="70%" height="70%"}

## Implementation Details
### Frontend design
**Write Here**

https://github.com/swsnu/swpp2019-team10/wiki/Design-and-Implementation 참고<br/>

### Backend design
Write down Django API for our application.

| Model | API | GET | POST | PUT | DELETE |
| :--- | :--- | :--- | :--- | :--- | :--- |
| User | ``` api/ ``` | X | X | X | X |
| | ``` api/ ``` | X | X | X | X |
| | ``` api/ ``` | X | X | X | X |

#### ``` api/signup/ ```
- POST
   * require json : ``` {"username": string, "password": string, "nickname": string} ```
   * (additional) json : ``` {"phone_number": string, "age": int, "gender": string} ```
   * return json : ``` {"id": id, "username": string, "phone_number": string, "age": int, "gender": string, "number_of_reviews": int, "number_of_friends": int, "nickname": string} ```
   * KeyError : status 400
   * Success : status 201
- NotAllowedMethod : status 405

#### ``` api/signup/ ```
- POST
   * require json : ``` {"username": string, "password": string, "nickname": string} ```
   * (additional) json : ``` {"phone_number": string, "age": int, "gender": string} ```
   * return json : ``` {"id": id, "username": string, "phone_number": string, "age": int, "gender": string, "number_of_reviews": int, "number_of_friends": int, "nickname": string} ```
   * KeyError : status 400
   * Success : status 201
- NotAllowedMethod : status 405

**Write Here**

## Implementation Plan
Break down each user story described in your requirements document into programming tasks. Determine the difficulty of each task, and try to estimate the number of developer-days that the tasks should take. Try to also determine dependencies among tasks. Then, you should list all of the tasks to be done in the current sprint, a preliminary assignment of tasks to people in the group, estimates of the time for each task, dependencies between tasks, and a preliminary division into sprints (e.g., which features are implemented in the first sprint, second sprint, and so on). The plan should be designed to get some prototype system running as quickly as possible and then growing towards to the full project over a sequence of sprints. Please pay extra attention to the dependency relationships between tasks; you will almost certainly run into the situation where one bit isn't done but everything else is waiting for it. In that case, you want to know exactly where resources need to go, and how urgent each bit is (hint: NOT proportional to its size or importance in the whole system).

Try to identify the major risks for the project in general and the plan in particular. Explain what the risks are and discuss how you plan to mitigate them.

| Page | Feature | Difficulty | Sprints | Assignee | Challenges |
|:--------|:--------|:--------|:--------|:--------|:--------|
| Sign up | sign up | 0.5 | 2 | X | |
| Login | ~~log in~~ | 0.5 | 2 | X | |
|  | write here | 0.5 | 2 | X | |
|  | ~~write here~~ | 0.5 | 2 | X | |

## Testing Plan<br />
In this section goes a brief description of how you plan to test the system. Thought should be given to how mostly automatic testing can be carried out, so as to maximize the limited number of human hours you will have for testing your system. The effort you put early on on automated testing will pay off when you have to ensure that you are not breaking existing functionality in future sprints.
Consider the following kinds of testing:

- **Unit testing**: explain for what modules you plan to write unit tests, and what framework you plan to use.<br />
- **Functional testing**: What APIs you plan to test? How will you test them? What tools you will use? Will you write mocks?<br />
- **Acceptance & integration testing**: how do you plan to test the user interface and scenarios?<br />

**Write Here**

***
## Registering Issues<br />
You have to register Github issues regarding tasks for design, implementation, and testing and mark them with milestones.

## Design and planning document grading guidelines<br />
These are the grading guidelines that staff will use to evaluate your document.

| Max points  | Design |
|-------------|--------|
| 8 | Are all parts of the document in agreement with the product requirements? |
| 10 | Is the architecture of the system described, with the major components and their interfaces? |
| 10 | Are all the external interfaces to the system specified in detail? |
| 10 | Are the major internal interfaces (e.g., client-server) specified in detail? |
| 8 | Is there sufficient detail in the design to start Iteration 1? |
| 4 | Is there reasonable detail in the design for features in future iterations? |
| | **Planning** |
| 8 | Is the plan for Iteration 1 sufficiently complete to start the implementation ? |
| 4 | Are the subteams identified and has enough thought been given to parallelization of effort and team dependencies? |
| 4 | Is there a discussion of the risks associated with this plan?  |
| 4 | Are the testing activities scheduled at the appropriate times? |
| | **Testing** |
| 5 | Does the design take into account testability of the various units, components, and subsystems ? |
| 4 | Is there a discussion of how unit testing will be done? |
| 6 | Is there a discussion of how functional (API) testing will be done automatically? |
| 4 | Is there a discussion of how acceptance/integration testing will be done? |
| | **Clarity** |
| 4 | Is the solution at a fairly consistent and appropriate level of detail? |
| 4 | Is the solution clear enough to be turned over to an independent group for implementation and still be understood? |
| 5 | Is the document making good use of semi-formal notation (UML, diagrams, etc) |
| 4 | Is the document identifying common architectural or design patterns, where appropriate? |
| 4 | Is the document carefully written, without typos and grammatical errors? |
***
