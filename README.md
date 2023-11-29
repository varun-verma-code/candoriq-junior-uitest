This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### Summary 
This test utilizes Next.js, Supabase (backend as a service), React, Typescript, ShadCN, TailwindCSS, Tanstack React Table, and React Hook Form. 
You have the freedom to employ all available resources within the 3-hour time limit. Aim to accomplish as much as possible within this timeframe; completion of all tasks is not mandatory. 
The test is open, allowing you to choose your approach. You may utilize any of the specified technologies but are restricted from introducing new ones. 
The grading will primarily focus on the functionality and quality of your code. While completing more tasks is beneficial, what we're focused on is the quality and readability of your code. 
Ensure a thorough quality check before proceeding to the next task. Bonus points will be awarded for exceptional TailwindCSS usage and visual design. *Do these tasks in order.* 

Once finshed, compress the folder into a zip file and rename it to your first and last name. (i.e. firstName_lastName.zip)  
Email it to (some email)

### Setup 
- npm install
  - need to have npm and git installed
- create a git branch or just send it by email by compressing it
- add .env.local keys 
- npm run dev
- go to [http://localhost:3000/] in your browser
- use the side panel to navigate between pages


### Tasks (Do these Tasks in Order)
- make the table sortable by column
- add a new column
- add a toggle switch to convert between between bonus percent and bonus absolutes
- add a search box to find specific jobs / people
- add new column to table that contains a button to open a detail page with the details of that specific job
  - use NextJS router with the id of the job in the url 
- make detail page editable so that when you update, the new information will be printed to the console
