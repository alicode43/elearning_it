import Link from "next/link"
import { Book, LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import type React from "react" // Added import for React

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] text-white p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <Book className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-semibold">LearnHub</span>
        </div>

        <nav className="space-y-2 flex-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800"
          >
            <User className="h-5 w-5" />
            Admin
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/courses" className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded-lg">
            <Book className="h-5 w-5" />
            My Courses
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>

        <Link
          href="/logout"
          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}

