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
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting: false,
  },
	{
    accessorKey: "job_title",
    header: "Job",
    enableSorting: false,
  },
	{
    accessorKey: "department",
    header: "Department",
    enableSorting: false,
  },
	{
    accessorKey: "equity",
    header:  () => (<TextRightHeader>Equity</TextRightHeader>),
		cell: ({ row }) => {
      const equity = parseFloat(row.getValue("equity"))
			return getNumberCell(equity)
    },
    enableSorting: false,
  },
	{
    accessorKey: "manager",
    header: "Manager",
    enableSorting: false,
  },
	{
    accessorKey: "start_date",
    header: "Start Date",
    enableSorting: false,
  },
	{
    accessorKey: "salary",
    header:  () => (<TextRightHeader>Salary</TextRightHeader>),
		cell: ({ row }) => {
      const salary = parseFloat(row.getValue("salary"))
			return getCurrencyCell(salary)
    },
    enableSorting: true,
  },
	{
    accessorKey: "bonus",
    header:  () => (<TextRightHeader>Bonus</TextRightHeader>),
		cell: ({ row }) => {
      const salary = parseFloat(row.getValue("bonus"))
			return getCurrencyCell(salary)
    },
    enableSorting: false,
  },
  {
    id: "bonus_percent",
    header: "Bonus %",
    accessorFn: (row) => ((row.bonus / row.salary) * 100).toFixed(2),
    cell: ({getValue}) => `${getValue()}%`,
    enableSorting: false,    
  }
]

function TextRightHeader ({children, className} : PropsWithChildren<{className?: string}>) {
	return (<div className={cn(className, 'text-right')}>{children}</div>)
}

function getNumberCell(value: number) {
	const formatted = new Intl.NumberFormat("en-US").format(value)
	return <TextRightHeader className="font-medium">{formatted}</TextRightHeader>
}

function getCurrencyCell(value: number) {
  const formatted = Intl.NumberFormat("en-us", {style: "currency", currency: "USD"}).format(value)
  return <TextRightHeader className="font-medium">{formatted}</TextRightHeader>
}