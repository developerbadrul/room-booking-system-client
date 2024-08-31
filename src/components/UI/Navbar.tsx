import {
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import Container from './Container';
import { Logo } from './Logo';
import { NavLink } from './NavLink';


interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children }) => {
    return (
        <PopoverButton as="a" href={href} className="block w-full p-2">
            {children}
        </PopoverButton>
    )
}

interface MobileNavIconProps {
    open: boolean;
}

const MobileNavIcon: React.FC<MobileNavIconProps> = ({ open }) => {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                )}
            />
        </svg>
    )
}

const MobileNavigation: React.FC = () => {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </PopoverButton>
            <Transition>
                <TransitionChild
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
                </TransitionChild>
                <TransitionChild
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <PopoverPanel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
                        <MobileNavLink href="#features">Features</MobileNavLink>
                        <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                        <hr className="m-2 border-slate-300/40" />
                        <MobileNavLink href="/login">Sign in</MobileNavLink>
                    </PopoverPanel>
                </TransitionChild>
            </Transition>
        </Popover>
    )
}

export const Navbar: React.FC = () => {
    return (
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link to="/" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                        <div className="hidden md:flex md:gap-x-6 font-semibold">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/meeting-rooms">Meeting Rooms</NavLink>
                            <NavLink href="/about">About Us</NavLink>
                            <NavLink href="/contact">Contact Us</NavLink>
                            <NavLink href="/dashboard">Dashboard</NavLink>

                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        
                        <Link className='px-5 py-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg' to="/login">Login</Link>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}


export default Navbar;