/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Menu,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import {
    Bars3Icon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Outlet, Link, useLocation } from 'react-router-dom';
import dashboardRoutes from '../../routes/dashboard-routes';
import LogoutButton from '../UI/Logout';


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div>
                <Transition show={sidebarOpen}>
                    <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <TransitionChild
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </TransitionChild>

                        <div className="fixed inset-0 flex">
                            <TransitionChild
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            {/* // logo  */}
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {dashboardRoutes.map((route) => (
                                                            <li key={route.name}>
                                                                <Link
                                                                    to={route.path}
                                                                    className={classNames(
                                                                        route.current
                                                                            ? 'bg-indigo-700 text-white'
                                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <route.icon
                                                                        className={classNames(
                                                                            route.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {route.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="mt-auto">
                                                    <a
                                                        href="#"
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                                                    >
                                                        <Cog6ToothIcon
                                                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                                            aria-hidden="true"
                                                        />
                                                        Settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </Transition>

               

                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                alt="Your Company"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                {dashboardRoutes.map((route) => (
                                    <li key={route.name}>
                                        <Link
                                            to={route.path}
                                            className={classNames(
                                                location.pathname === route.path
                                                    ? 'bg-indigo-700 text-white'
                                                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                            )}
                                        >
                                            <route.icon
                                                className={classNames(
                                                    location.pathname === route.path ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                    'h-6 w-6 shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {route.name}
                                        </Link>
                                    </li>
                                ))}
                                {/* <li className="mt-auto">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                                    >
                                        <Cog6ToothIcon
                                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                            aria-hidden="true"
                                        />
                                        Settings
                                    </a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <div className="relative flex flex-1">
                                {/* <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <input
                                    id="search-field"
                                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    type="search"
                                    name="search"
                                /> */}
                            </div>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                {/* <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                                <Menu as="div" className="relative">
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                                            alt=""
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                                Tom Cook
                                            </span>
                                            {/* <ChevronDownIcon
                                                className="ml-2 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            /> */}
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            <div className="py-1">
                                                
                                                {/* <Menu.Item>
                                                </Menu.Item> */}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <LogoutButton />
                            </div>
                        </div>
                    </div>

                    <main className="p-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}
