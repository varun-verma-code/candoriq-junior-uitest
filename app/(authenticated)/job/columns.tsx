import { ColumnDef } from "@tanstack/react-table"

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
]