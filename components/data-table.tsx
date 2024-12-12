"use client"

import { LiaSortSolid, LiaSortUpSolid, LiaSortDownSolid } from "react-icons/lia";
import React from "react"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
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
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

/*
The DataTable is dynamically sorted.
In order to sort data by a column, set the enableSorting property for colum to true
The column will dynamically get the styles (pointer, icon) to signify sortable and order or sort

TODO: 
=====
1. The header should dynamically be right or left justified based on typeof value
*/
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState([])
	const [columnVisibility, setColumnVisibility] = React.useState({
    bonus_percent: false, // Default visibility set to false
  });
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
			columnVisibility,
    },
    onSortingChange: setSorting,
		onColumnVisibilityChange: setColumnVisibility,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  })



  return (
    <div className="rounded-md border-y overflow-auto h-[63vh] w-[90vw] relative scroll-auto">
				{table.getColumn("bonus") ? (
					<div>
						<input type="checkbox" id="toggleBonus" name="toggleBonus" value=""
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
						<label htmlFor="toggleBonus" className="text-sm font-normal text-center text-gray-700"> Bonus %</label>
					</div>
				) : null}
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
															{onClick: header.column.getToggleSortingHandler(), className:`flex justify-center cursor-pointer`}
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
																	false: <LiaSortSolid className="align-bottom" />,
																	asc: <LiaSortUpSolid className="inline-flex" />,
																	desc: <LiaSortDownSolid className="inline-flex" />,
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
  )
}
