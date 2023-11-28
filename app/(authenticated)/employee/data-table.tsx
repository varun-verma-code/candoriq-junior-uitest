"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
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

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })



  return (
    <div className="rounded-md border-y border-gray-200 overflow-auto">
			<div className='h-[63vh] w-[85vw] relative overflow=auto'>
				<Table>
					<TableHeader className='sticky top-0'>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow className='border-b-1 border-gray-200' key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => {
									return (
										<TableHead 
											key={header.id}
											className={`${index === 0 ? 'sticky left-0' : ''} bg-secondary`}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
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
												className={`${index === 0 ? 'sticky left-0' : ''} bg-secondary`}>
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
