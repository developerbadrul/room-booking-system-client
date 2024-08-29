import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
    {
        name: 'Mechanical Switches',
        description: 'Enjoy precise and tactile key presses with high-quality mechanical switches.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Customizable RGB Lighting',
        description: 'Personalize your keyboard setup with customizable RGB lighting effects.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Durable Construction',
        description: 'Built to last with durable materials and a sturdy design for long-lasting performance.',
        icon: LockClosedIcon,
    },
    {
        name: 'Advanced Key Mapping',
        description: 'Map keys and macros for gaming or productivity tasks with advanced software support.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Wireless Connectivity',
        description: 'Experience freedom and flexibility with wireless connectivity options.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Programmable Function Keys',
        description: 'Configure function keys to suit your workflow or gaming preferences.',
        icon: ServerIcon,
    },
];

export default function Advantage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enhance your typing experience</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover the features that make our mechanical keyboards stand out from the rest.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img
                        src="https://images.unsplash.com/photo-1718801263163-21a8a92a0e8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
