import { Container } from "lucide-react"
import PageWithHeader from "./page-with-header"
import Sidebar from "./sidebar"

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
      <section className="flex h-full">
        <Sidebar/>
        <PageWithHeader className='flex-1'>
          {children}
        </PageWithHeader>
      </section>
  )
}

