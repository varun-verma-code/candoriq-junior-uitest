"use client"

import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { PropsWithChildren } from "react"
import { CustomColumnDef } from "@/types/custom-col-def"

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

export const columns: CustomColumnDef<Employee, any>[] = [
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true, // enableSorting is manually set to false by default in data-table.tsx; set property to true when needed.
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
	{
    accessorKey: "salary",
    header:  () => (<TextRightHeader>Salary</TextRightHeader>),
		cell: ({ row }) => {
      const salary = parseFloat(row.getValue("salary"))
			return getCurrencyCell(salary)
    },
    enableSorting: true,
    headerAlignment: "right",
  },
	{
    accessorKey: "bonus",
    header:  () => (<TextRightHeader>Bonus</TextRightHeader>),
		cell: ({ row }) => {
      const salary = parseFloat(row.getValue("bonus"))
			return getCurrencyCell(salary)
    },
  },
  {
    id: "bonus_percent",
    header: () => (<TextRightHeader>Bonus %</TextRightHeader>),
    accessorFn: (row) => ((row.bonus / row.salary) * 100).toFixed(2),
    cell: ({getValue}) => (<TextRightHeader>{`${getValue()}%`}</TextRightHeader>),
  }
]

function TextRightHeader ({children, className} : PropsWithChildren<{className?: string}>) {
	return (<div className={cn(className, 'text-right')}>{children}</div>)
}

function getNumberCell(value: number) {
	const formatted = new Intl.NumberFormat("en-US").format(value)
	return <TextRightHeader>{formatted}</TextRightHeader>
}

function getCurrencyCell(value: number) {
  const formatted = Intl.NumberFormat("en-us", {style: "currency", currency: "USD"}).format(value)
  return <TextRightHeader>{formatted}</TextRightHeader>
}