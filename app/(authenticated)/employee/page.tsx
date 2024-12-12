import { cookies } from "next/headers"
import { Employee, columns } from "./columns"
import { DataTable } from "../../../components/data-table"
import { createServerClient } from "@supabase/ssr"
import { PostgrestError } from '@supabase/supabase-js'
import { Database } from "@/types/supabase"
import { supabaseUtils } from "@/lib/utils"
export type DbResult<T> = T extends PromiseLike<infer U> ? U : never
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never
export type DbResultErr = PostgrestError

type EmployeeTable = Database['public']['Tables']['employees']['Row']
type JoinedEmployee = EmployeeTable & {
  manager_id: {
    id: string,
    first_name: string,
    last_name: string
  },
  jobs: {
    id: string,
    name: string
  },
  departments: {
    id: string,
    name: string
  }
}

async function getEmployeeData(jobId : string | undefined): Promise<Employee[]> {
  const supabase = supabaseUtils.createServerClient(cookies())
  let employeesQuery = supabase.from("employees").select(
    "id, first_name, last_name, salary, email, bonus, jobs(id, name), departments(id, name), start_date, manager_id(first_name, last_name), equity")
  if(jobId) {
    employeesQuery.eq("job_id", jobId)
  }
  const { data, error } = await employeesQuery.returns<JoinedEmployee[]>()
  if (error || !data) {
    console.error(error)
    return []
  }


  return data.map(employee => {
    return {
      id: employee.id,
      name: `${employee.first_name} ${employee.last_name}`,
      salary: employee.salary,
      email: employee.email??'',
      bonus: employee.bonus,
      job_title:  (employee.jobs as unknown as {name: string}).name,
      department: (employee.departments as unknown as {name: string}).name,
      start_date: employee.start_date,
      manager: employee.manager_id ? employee.manager_id.first_name + ' ' + employee.manager_id.last_name : '',
      equity: employee.equity
    }
  })
}


export default async function EmployeePage({searchParams}: {searchParams: Promise<{ [key: string]: string }>}) {
  const params = await searchParams
  const jobId = params["job"]
  const data = await getEmployeeData(jobId)

  return (
    <div className="flex overflow-hidden justify-center">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
