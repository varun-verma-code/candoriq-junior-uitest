import { Employee, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Employee[]> {
  // Fetch data from your API here.
  return [
    {
      "id": "728ed52f",
      "name": "Test User",
      "salary": 100000,
      "email": "m@example.com",
      "bonus": 10000,
      "job_title": "Software Engineer",
      "department": "Engineering",
      "start_date": "2021-01-01",
      "manager": "Test Manager",
      "equity": 1000
    },
    {
      "id": "a1b2c3d4",
      "name": "John Smith",
      "salary": 90000,
      "email": "john.smith@example.com",
      "bonus": 8000,
      "job_title": "Data Analyst",
      "department": "Analytics",
      "start_date": "2022-02-15",
      "manager": "Alice Manager",
      "equity": 800
    },
    {
      "id": "5e6f7g8h",
      "name": "Alice Johnson",
      "salary": 75000,
      "email": "alice.j@example.com",
      "bonus": 3000,
      "job_title": "Data Scientist",
      "department": "Data Science",
      "start_date": "2021-11-10",
      "manager": "Bob Manager",
      "equity": 1500
    },
    {
      "id": "i9j0k1l2",
      "name": "Emily Davis",
      "salary": 85000,
      "email": "emily.d@example.com",
      "bonus": 6000,
      "job_title": "UX Designer",
      "department": "Design",
      "start_date": "2022-05-20",
      "manager": "Charlie Manager",
      "equity": 1200
    },
    {
      "id": "m3n4o5p6",
      "name": "Michael Johnson",
      "salary": 95000,
      "email": "michael.j@example.com",
      "bonus": 7000,
      "job_title": "Sales Manager",
      "department": "Sales",
      "start_date": "2021-08-01",
      "manager": "David Manager",
      "equity": 2000
    },
    {
      "id": "q7r8s9t0",
      "name": "Sophia Chen",
      "salary": 80000,
      "email": "sophia.c@example.com",
      "bonus": 4000,
      "job_title": "Marketing Specialist",
      "department": "Marketing",
      "start_date": "2022-03-08",
      "manager": "Emma Manager",
      "equity": 1000
    },
    {
      "id": "u1v2w3x4",
      "name": "William Baker",
      "salary": 92000,
      "email": "william.b@example.com",
      "bonus": 8500,
      "job_title": "Product Manager",
      "department": "Product Management",
      "start_date": "2021-12-05",
      "manager": "Frank Manager",
      "equity": 1800
    },
    {
      "id": "y5z6a7b8",
      "name": "Eva Rodriguez",
      "salary": 88000,
      "email": "eva.r@example.com",
      "bonus": 5500,
      "job_title": "Software Developer",
      "department": "Engineering",
      "start_date": "2022-01-30",
      "manager": "George Manager",
      "equity": 1600
    },
    {
      "id": "c9d0e1f2",
      "name": "Christopher Lee",
      "salary": 82000,
      "email": "chris.l@example.com",
      "bonus": 3200,
      "job_title": "IT Specialist",
      "department": "IT",
      "start_date": "2021-06-18",
      "manager": "Hannah Manager",
      "equity": 1200
    },
    {
      "id": "g3h4i5j6",
      "name": "Olivia Turner",
      "salary": 76000,
      "email": "olivia.t@example.com",
      "bonus": 2800,
      "job_title": "Quality Assurance Analyst",
      "department": "Quality Assurance",
      "start_date": "2022-04-22",
      "manager": "Ian Manager",
      "equity": 900
    },
    {
      "id": "k7l8m9n0",
      "name": "Daniel White",
      "salary": 94000,
      "email": "daniel.w@example.com",
      "bonus": 7200,
      "job_title": "Financial Analyst",
      "department": "Finance",
      "start_date": "2021-09-12",
      "manager": "Julia Manager",
      "equity": 1900
    },
    {
      "id": "p1q2r3s4",
      "name": "Sophie Hall",
      "salary": 89000,
      "email": "sophie.h@example.com",
      "bonus": 4800,
      "job_title": "HR Specialist",
      "department": "Human Resources",
      "start_date": "2022-02-28",
      "manager": "Ken Manager",
      "equity": 1500
    },
    {
      "id": "t5u6v7w8",
      "name": "Benjamin Harris",
      "salary": 87000,
      "email": "benjamin.h@example.com",
      "bonus": 5000,
      "job_title": "System Administrator",
      "department": "IT",
      "start_date": "2021-07-07",
      "manager": "Lisa Manager",
      "equity": 1100
    },
    {
      "id": "x9y0z1a2",
      "name": "Emma Turner",
      "salary": 91000,
      "email": "emma.t@example.com",
      "bonus": 6000,
      "job_title": "Marketing Manager",
      "department": "Marketing",
      "start_date": "2022-05-10",
      "manager": "Mike Manager",
      "equity": 1300
    },
    {
      "id": "b3c4d5e6",
      "name": "Jackson Parker",
      "salary": 80000,
      "email": "jackson.p@example.com",
      "bonus": 3800,
      "job_title": "Sales Representative",
      "department": "Sales",
      "start_date": "2021-10-25",
      "manager": "Natalie Manager",
      "equity": 800
    },
    {
      "id": "f7g8h9i0",
      "name": "Ava Thompson",
      "salary": 83000,
      "email": "ava.t@example.com",
      "bonus": 4200,
      "job_title": "UX/UI Designer",
      "department": "Design",
      "start_date": "2022-03-03",
      "manager": "Oscar Manager",
      "equity": 1400
    },
    {
      "id": "j1k2l3m4",
      "name": "James Turner",
      "salary": 96000,
      "email": "james.t@example.com",
      "bonus": 7800,
      "job_title": "Senior Software Engineer",
      "department": "Engineering",
      "start_date": "2021-11-30",
      "manager": "Pamela Manager",
      "equity": 2200
    },
    {
      "id": "n5o6p7q8",
      "name": "Lily Adams",
      "salary": 78000,
      "email": "lily.a@example.com",
      "bonus": 3400,
      "job_title": "Customer Support Specialist",
      "department": "Customer Support",
      "start_date": "2022-01-15",
      "manager": "Quincy Manager",
      "equity": 1000
    },
    {
      "id": "r9s0t1u2",
      "name": "Henry Wilson",
      "salary": 92000,
      "email": "henry.w@example.com",
      "bonus": 7000,
      "job_title": "IT Manager",
      "department": "IT",
      "start_date": "2021-08-22",
      "manager": "Rebecca Manager",
      "equity": 1900
    },
    {
      "id": "v3w4x5y6",
      "name": "Mia Harris",
      "salary": 87000,
      "email": "mia.h@example.com",
      "bonus": 5500,
      "job_title": "Content Writer",
      "department": "Marketing",
      "start_date": "2022-04-10",
      "manager": "Sam Manager",
      "equity": 1200
    },
    {
      "id": "z7a8b9c0",
      "name": "Carter Miller",
      "salary": 89000,
      "email": "carter.m@example.com",
      "bonus": 4600,
      "job_title": "Financial Advisor",
      "department": "Finance",
      "start_date": "2021-09-05",
      "manager": "Tina Manager",
      "equity": 1600
    },
    {
      "id": "d1e2f3g4",
      "name": "Isabella Turner",
      "salary": 95000,
      "email": "isabella.t@example.com",
      "bonus": 7200,
      "job_title": "Software Developer",
      "department": "Engineering",
      "start_date": "2022-01-05",
      "manager": "Ulysses Manager",
      "equity": 2000
    }
  ]  
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="overflow-hidden">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
