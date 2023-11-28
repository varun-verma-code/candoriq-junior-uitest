import { Container } from "lucide-react"
import PageWithHeader from "./page-with-header"
import Sidebar from "./sidebar"

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
      <main className="w-[100vw] flex h-full overflow-hidden">
        <Sidebar/>
        <PageWithHeader className='flex-1 overflow-hidden'>
          {children}
        </PageWithHeader>
      </main>
  )
}

