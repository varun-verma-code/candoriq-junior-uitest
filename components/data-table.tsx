"use client"

import { LiaSortSolid, LiaSortUpSolid, LiaSortDownSolid } from "react-icons/lia";
import React from "react"
import { CustomColumnDef } from "@/types/custom-col-def";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: CustomColumnDef<TData, TValue>[]
  data: TData[]
}

/*
Features and Usage
==================
1. The DataTable is dynamically sorted.
2. In order to sort data by a column, set the enableSorting property for colum to true
3. The column will dynamically get the styles (pointer, icon) to signify sortable and order or sort
4. The header will dynamically be right or left justified based on the ColumnDef headerAlignment, left justified by default
*/
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState([])
	const [columnVisibility, setColumnVisibility] = React.useState({
    bonus_percent: false, // Default visibility set to false
  });
	const [globalFilter, setGlobalFilter] = React.useState(""); // Track search input
  const table = useReactTable({
    data,
    columns,
		defaultColumn: {
			enableSorting: false, // Override default for enableSorting property from true to false. Set sortable for columns explicitly as needed
		},
    state: {
      sorting,
			columnVisibility,
			globalFilter,
    },
    onSortingChange: setSorting,
		onColumnVisibilityChange: setColumnVisibility,
		onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    globalFilterFn: "includesString",
  })



  return (
		<div className="min-w-full min-h-screen">
			<div className="flex items-center py-1"> {/* Container for the Search input and toggle button */}
				<input type="text" value={globalFilter} placeholder="Search..." className="border rounded px-3 py-2 w-1/5"
					onChange={(e) => table.setGlobalFilter(String(e.target.value))}
				/>
				{table.getColumn("bonus") ? (
					<div className="inline-block p-2 h-10 align-middle">
						<label className="inline-flex items-center cursor-pointer">
							<input type="checkbox" value="" className="sr-only peer"
								onClick={() => {
									const bonusCol = table.getColumn("bonus")
									const bonusPercentCol = table.getColumn("bonus_percent")
									if (bonusPercentCol) {
										bonusPercentCol.getIsVisible() ? bonusPercentCol.toggleVisibility(false) : bonusPercentCol.toggleVisibility(true)
									}
									if (bonusCol) {
										bonusCol.getIsVisible() ? bonusCol.toggleVisibility(false) : bonusCol.toggleVisibility(true)
									}
								}}							
							/>
							<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Bonus %</span>
						</label>
					</div>
				) : null}
			</div>
			<div className="rounded-md border-y overflow-auto relative scroll-auto"> {/* Container for the display table */}
				<Table>
					<TableHeader className='sticky top-0 z-10'>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow className='border-b-1' key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => {
									return (
										<TableHead 
											key={header.id}
											className={`${index === 0 ? 'sticky left-0' : ''} bg-secondary`}>
											{header.isPlaceholder ? null : (
												// If column is sortable, then assign toggleSortingHandler on-click, and CSS styles
												<div {...(header.column.getCanSort() ? 
															{onClick: header.column.getToggleSortingHandler(), className:`flex cursor-pointer items-center
																${header.column.columnDef?.headerAlignment === "right"
																	? "justify-end"
																	: header.column.columnDef?.headerAlignment === "center"
																	? "justify-center"
																	: "justify-start"
																}
																`}	// Justify headers based on column def, or justify-start/left by default
															: {}
														)}
												>
												{flexRender(
														header.column.columnDef.header,
														header.getContext()
												)}
												{/* If column is sortable, then add an icon depending on the order or sort */}
												{header.column.getCanSort() && (
															<div className="">
																{{
																	false: <LiaSortSolid />,
																	asc: <LiaSortUpSolid />,
																	desc: <LiaSortDownSolid />,
																}[header.column.getIsSorted() as string] ?? null}
															</div>
												)}
											</div>

													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell, index) => 
									{
										return (
											<TableCell 
												key={cell.id}
												className={`${index === 0 ? 'sticky left-0' : ''} bg-white`}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</TableCell>
										)})}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>	
  )
}
