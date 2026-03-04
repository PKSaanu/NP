'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX, IconChevronRight } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

interface NavItem {
    name: string
    link: string
    icon?: JSX.Element
}

export default function Navbar({ navItems }: { navItems: NavItem[] }) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    // Intersection Observer for active section highlighting
    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        })

        navItems.forEach((item) => {
            const id = item.link.replace('#', '')
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [navItems])

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            {/* TRADITIONAL FIXED NAVBAR (Shared background/blur) */}
            <div className="fixed top-0 left-0 right-0 z-[130] bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
                <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-14">
                    {/* Logo */}
                    <Link href="#intro" className="relative h-12 w-32 shrink-0">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" priority />
                    </Link>

                    {/* DESKTOP NAV - Right Aligned */}
                    <nav className="hidden md:flex items-center gap-2 lg:gap-2">
                        {navItems.map((item, idx) => {
                            const id = item.link.replace('#', '')
                            const isActive = activeSection === id
                            return (
                                <Link
                                    key={idx}
                                    href={item.link}
                                    className={cn(
                                        "px-2 xl:px-3 py-2 text-[10px] lg:text-[11px] xl:text-xs font-normal uppercase tracking-wider transition-all duration-200 border-b-2",
                                        isActive
                                            ? "text-purple-400 border-purple-500"
                                            : "text-gray-400 border-transparent hover:text-gray-100"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* MOBILE TOGGLE - Now always on top thanks to z-[130] */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 transition-colors relative flex items-center justify-center h-10 w-10 overflow-hidden"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isOpen ? "close" : "open"}
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* MOBILE SIDEBAR DRAWER */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-gray-900 border-l border-white/10 z-[120] md:hidden overflow-y-auto pt-16"
                        >
                            <div className="flex flex-col p-6 pt-2 gap-2">
                                {navItems.map((item, idx) => {
                                    const id = item.link.replace('#', '')
                                    const isActive = activeSection === id
                                    return (
                                        <Link
                                            key={idx}
                                            href={item.link}
                                            onClick={handleLinkClick}
                                            className={cn(
                                                "flex items-center justify-between p-4 rounded-xl transition-all duration-300 group",
                                                isActive
                                                    ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                                    : "text-gray-400 hover:bg-white/5"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={cn("w-5 h-5", isActive ? "text-purple-400" : "text-gray-500 group-hover:text-gray-300")}>
                                                    {item.icon}
                                                </span>
                                                <span className="font-normal">{item.name}</span>
                                            </div>
                                            <IconChevronRight className={cn("w-4 h-4 opacity-0 transition-all", isActive && "opacity-100")} />
                                        </Link>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
