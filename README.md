# Evaluation Instructions

## Prereqs

- Must have npm, git, supabase cli, and docker.

## Overview:

This test is designed to assess your skills using a stack that includes
Supabase, Next.JS, and React. The tasks closely mirror the responsibilities
expected for this role at CandorIQ and will heavily test your system design
abilities.

## Guidelines:

1. **Time Suggestion** The exercise shouldn't take you more than 3-hour to
   finish and you are encouraged to leverage all available resources within this
   timeframe.

2. **Flexibility:** Feel free to leverage any available resources. Use any of
   the specified technologies, but avoid introducing new ones.

3. **Grading Focus:** The primary focus during grading will be on the
   functionality and quality of your code.

4. **Quality Check:** Before progressing to the next task, ensure a thorough
   quality check of your code. Attention to detail is crucial.

### Setup

1. Run `npm install` in your terminal.
2. Open docker
3. Run `supabase start` in your terminal
4. Create a `.env.local` file in the root folder and copy and paste the keys
   provided in the email and add the following 2 keys
   - `NEXT_PUBLIC_SUPABASE_URL="http://localhost:64321"`
   - Get the value for this key from `supabase status` under anon key:
     `NEXT_PUBLIC_SUPABASE_ANON_KEY="{insert anon key}"`
5. Run `supabase db reset` to run sql migrations and seed the database
6. Run `npm run dev` in your terminal to start the server.
7. Go to [http://localhost:3000/](http://localhost:3000/) in your browser.
8. After completion, submit by email after compressing the folder into a zip
   file.

### Task

There are three tables: employees, jobs, and departments. Each employee has a
manager_id that references another employee's record. Currently, logging in from
any account grants visibility of all employee records. Your task is to implement
access control so that each account can view only the employees within their
management hierarchy.

For example, David Anderson should be able to see Alice Johnson, as he is her
manager, and also Jessica White, as Alice is Jessica's manager. However, David
should not be able to see John Doe, who is his own manager. Ensure that the
access control works correctly for two specified accounts, but ideally, this
restriction should apply to all employees, regardless of whether or not they
have accounts.

### Account Credentials:

1. David Anderson
   - email: david.anderson@example.com
   - password: password123

2. Emma Williams
   - email: emma.williams@example.com
   - password: password123

**Bonus Points** Each employee is associated with a specific job. Ensure that
each account can view only the jobs linked to the employees they have permission
to access, according to the management hierarchy.
