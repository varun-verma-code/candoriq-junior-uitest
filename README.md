# Evaluation Instructions

## Prereqs
- Must have npm and git 

## Overview:
This test is designed to assess your skills using a stack that includes Next.js, Supabase (backend as a service), React, Typescript, ShadCN, TailwindCSS, Tanstack React Table, and React Hook Form. The tasks closely mirror the responsibilities expected for this role at CandorIQ.

## Guidelines:

1. **Time Suggestion** The exercise shouldn't take you more than 3-hour to finish and you are encouraged to leverage all available resources within this timeframe.

2. **Flexibility:** Feel free to leverage any available resources. Use any of the specified technologies, but avoid introducing new ones.

3. **Grading Focus:** The primary focus during grading will be on the functionality and quality of your code. While completing more tasks is advantageous, emphasis is placed on the quality, efficiency, and readability of your code.

4. **Quality Check:** Before progressing to the next task, ensure a thorough quality check of your code. Attention to detail is crucial.

5. **Brownie Points:** Exceptional usage of TailwindCSS and attention to visual design will be rewarded with bonus points.

## Task Order
Please complete the tasks in the specified order. **Completion of all tasks is not mandatory. Get as much done as possible.**

### Setup 
1. Run `npm install` in your terminal.
2. Create a `.env.local` file in the root folder and copy and paste the keys provided in the email.
3. Run `npm run dev` in your terminal to start the server.
4. Go to [http://localhost:3000/](http://localhost:3000/) in your browser.
5. Use 'uitest@candoriq.com' as the email and use password provided in your instruction email.
6. After completion, submit by email after compressing the folder into a zip file.

### Tasks (Do these Tasks in Order)
After logging in, you will see a side panel with two icons. These will navigate you to the 'Employees' and 'Jobs' pages. In both pages, you will see a table with either employee or job data. 
You can find the page data in the app folder. You are free to use any of the pre-built components in the components folder. 

1. Add 2 new columns to the employees table 
   - Add 'salary' and 'bonus' columns.
   - Make sure to format them in USD.
   
2. Make the 'name' and 'salary' columns in the employees table sortable.

3. Add a toggle switch to convert between bonus percent and bonus in dollars for the employees table.
   - Bonus percent is calculated using `(bonus / salary)`.

4. Add a search box to find specific jobs/people in both employees and jobs tables.

5. Add a new column to the jobs table that contains a button to open a details page with a table listing all employees who have that job.
   - Hint: A new query needs to be written for this.
