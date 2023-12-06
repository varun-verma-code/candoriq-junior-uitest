"use client"

import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { PropsWithChildren } from "react"

export type Employee = {
  id: string
  salary: number
  email: string
	name: string
	bonus: number
	job_title: string
	department: string
	start_date: string
	manager: string
	equity: number
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
	{
    accessorKey: "job_title",
    header: "Job",
  },
	{
    accessorKey: "department",
    header: "Department",
  },
	{
    accessorKey: "equity",
    header:  () => (<TextRightHeader>Equity</TextRightHeader>),
		cell: ({ row }) => {
      const equity = parseFloat(row.getValue("equity"))
			return getNumberCell(equity)
    },
  },
	{
    accessorKey: "manager",
    header: "Manager",
  },
	{
    accessorKey: "start_date",
    header: "Start Date",
  },
]

function TextRightHeader ({children, className} : PropsWithChildren<{className?: string}>) {
	return (<div className={cn(className, 'text-right')}>{children}</div>)
}

function getNumberCell(value: number) {
	const formatted = new Intl.NumberFormat("en-US").format(value)
	return <TextRightHeader className="font-medium">{formatted}</TextRightHeader>
}
