import PageWithHeader from "./page-with-header"
import Sidebar from "./sidebar"

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <Sidebar/>
      <PageWithHeader className='flex-1'>
        {children}
      </PageWithHeader>
    </section>
  )
}

