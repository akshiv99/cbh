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

Ticket 1: 
     facilities table implements the facility to add custom ID, which is stored in a new column in the table

     Tasks:
        Implement the ability to add the customID for each agent in the front end
        Validate the uniqueness of the customID for the facility 
        Update the customID in the facilities table

     Acceptance criteria: 
        A facility is successfully able to add a customID for an agent
        There are no duplicate customID within each facility 
        An error is thrown when a customID already exists within the facility table, prompting the user to enter a different customID
        The customID is successfully stored in the table in the appropriate row of the user
    
     Time/effort estimates:
        Medium effort and time
        
    Implementation details:
        - Additional column to input the customID for the agent must be added to the form that already exists on the front end
        - The agent name/agentID for which the customID is entered has to be validated
        - A column named customID must be added to each facility's table, which would store the customID the particular facility has entered for the particular agent
        - Backend should check for duplicates by fetching the already exisiting customIDs in the facility table with the current given customID
        - Backend then would then make a call to insert the column value in the appropriate row cell 
                        

Ticket 2:
     Modify the 'getShiftsByFacility' function to include the customID

     Tasks:
        Modify the function to also fetch the customID along with the agent's metadata
    
    Acceptance criteria:
        The function successfully also returns the customID if present for the particular agent along with the all the shifts and agent metadata
    
    Time/effort estimates:
        Low effort and time
    
    Implementation details:
        - Fetch the customID for the agent from the database
        - Return this data appropriately along with the shifts worked and the agent's metadata


Ticket 3:
     Include functionality to generate PDF based on the custom ID provided by the facility 

     Tasks:
        Platform should implement the logic to get the customID as an input and generate report based on the customID
        Modify the 'generateReport' function to take in the customID parameter for report generation 
        PDF generated should also display the customID of the agent who worked the shift

     Acceptance criteria:
        The facility is able to generate report based on the customIDs provided
        An incorrect customID should throw an error
        The PDF generated should include the customID provided by the facility

    Time/effort estimates:
        High time and effort
    
    Implementation details:
        - Front end should include column to enter customID for report generation
        - customID entered should be validated by fetching the data from the database, an error should be thrown if the validation results in failure
        - 'generateReport' should be modified to include generation of report for the facility based on the customID provided, appropriate report should be generated
        - CSS changes to the PDF have to be made to incorporate the addition of the the customID
        
