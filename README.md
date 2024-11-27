# Evaluation Instructions

## Prereqs

- Must have npm, git, supabase cli, and docker.

## Overview:

This test is designed to assess your skills using a stack that includes
Supabase, Next.JS, and React. The tasks closely mirror the responsibilities
expected for this role at CandorIQ and will heavily test your system design
abilities.

## Guidelines:

1. **Time Suggestion** The exercise shouldn't take you more than 3-hour to finish and you are encouraged to leverage all available resources within this timeframe.

2. **Flexibility:** Feel free to leverage any available resources. Use any of the specified technologies, but avoid introducing new ones.

3. **Grading Focus:** The primary focus during grading will be on the functionality and quality of your code. While completing more tasks is advantageous, emphasis is placed on the quality, efficiency, and readability of your code.

4. **Quality Check:** Before progressing to the next task, ensure a thorough quality check of your code. Attention to detail is crucial.

5. **Brownie Points:** Exceptional usage of TailwindCSS and attention to visual design will be rewarded with bonus points.

### Supabase Setup

1. Follow supabase setup instructions here =>
   [https://supabase.com/docs/guides/local-development/cli/getting-started](https://supabase.com/docs/guides/local-development/cli/getting-started)
2. To start supabase run `supabase start` in your terminal
3. To run sql migrations and seed the database run `supabase db reset`

### Setup

1. Install all dependencies by running `npm install`
2. Link the NextJS application to local Supabase by creating a `.env.local` file
   in the root folder and adding the following 2 keys
   - `NEXT_PUBLIC_SUPABASE_URL="http://localhost:64321"`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY="{insert anon key}"` (You can get the anon
     key by running `supabase status`)
3. Run `npm run dev` in your terminal to start your application.
4. Go to [http://localhost:3000/](http://localhost:3000/) in your browser.
5. After completion, submit by email after compressing the folder into a zip
   file.
6. Access the supabase ui [http://localhost:64323/](http://localhost:64323/)

## Task Order
Please complete the tasks in the specified order. **Completion of all tasks is not mandatory. Get as much done as possible.**

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

### Account Credentials:

1. David Anderson
   - email: david.anderson@example.com
   - password: password123
