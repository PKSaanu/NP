import Image from 'next/image'
import Link from 'next/link'
import { Mail, Linkedin, BookOpen } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0">
        <div className="relative w-48 h-48">
          <Image
            src="/profile-picture.jpg"
            alt="Dr. Nirthika Rajendran"
            width={192}
            height={192}
            className="rounded-lg border-2 border-purple-500 object-cover"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
        </div>
        <h1 className="text-3xl font-bold text-center md:text-left">Dr. Nirthika Rajendran</h1>
      </div>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link 
              href="mailto:nirthika@univ.jfn.ac.lk" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link 
              href="https://lk.linkedin.com/in/nirthika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link 
              href="https://scholar.google.com/citations?user=WtrsAqsAAAAJ&hl=en&oi=ao" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"
              aria-label="Google Scholar"
            >
              <BookOpen className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

