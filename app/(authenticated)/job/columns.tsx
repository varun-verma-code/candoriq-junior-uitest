"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export type Job = {
	id: string
	name: string
	department: string
}

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    // Link to navigate to Employee detail page, to display employees who have that job
    id: "view_employees",
    header: "View Employees",
    cell: ({row}) => {
      const jobId = row.original.id;
      return <Link href={`/employee?job=${jobId}`} className="text-blue-500 underline">View Employees</Link>
    }
  }
]