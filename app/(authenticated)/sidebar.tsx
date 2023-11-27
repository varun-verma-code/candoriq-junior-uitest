"use client";
import { MoreVertical } from "lucide-react"
import { useContext, createContext, useState, PropsWithChildren } from "react"
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import Image from 'next/image'
import logo_long from '/public/logo_long.png'
import logo from  '/public/logo.png'
import { usePathname } from "next/navigation";
import { PAGES } from "./page-with-header";
import { IconType } from "react-icons";

const SidebarContext = createContext({expanded: false})

export default function Sidebar({ children } : PropsWithChildren) {
  const [expanded, setExpanded] = useState(false)
  const currentPah = usePathname()
  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col border-r shadow-sm ${expanded ? 'bg-white' : 'bg-primary'}`}>
        <div className="p-2 pb-2 flex gap-2 items-center">
          <Image
            src={logo}
            height={40}
            className="ml-1 inline bg-white rounded-md"
            alt="CandorIQ Logo"
          />
          <div
            className={`${expanded ? '' : 'hidden'}`}
          >CandorIQ</div>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {PAGES.map((page) => (
              <SidebarItem
                key={page.href}
                icon={page.icon}
                text={page.label}
                active={currentPah === page.href}
            />))}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t p-3">
          <div className="flex">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-48 ml-3" : "w-0"}
            `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
          <div className='mt-3 flex items-center gap-2'>
              <button 
                className="inline-block py-0.5 border border-gray-300 rounded "
                onClick={() => setExpanded((curr) => !curr)}>
                {expanded ?  
                <MdArrowBack className="text-xl mx-1 text-gray-600 duration-300" /> :
                <MdArrowForward className="text-xl mx-1 text-white duration-300" />}
              </button>
              <h3 className={`text-xs font-normal text-center text-gray-700 ${expanded ? 'block' : 'hidden'} whitespace-nowrap`}>
                <span>Powered by </span>
                <Image
                  src={logo_long}
                  height={16}
                  className="ml-1 inline"
                  alt="CandorIQ Logo"
                />
            </h3>
          </div>
        </div>
      </nav>
    </aside>
  )
}

function SidebarItem({ icon: Icon, text, active, alert }: {
	icon: IconType
	text: string
	active?: boolean
	alert?: boolean
}) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-white"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <Icon className={`text-2xl ${active?'text-highlight-foreground':'text-white'}`}/>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-48 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}