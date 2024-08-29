// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const featuredTestimonial = {
    body: 'I have been using mechanical keyboards for years, and this one is by far the best. The build quality is amazing, and the typing experience is second to none. Highly recommended for both gamers and typists!',
    author: {
        name: 'John Doe',
        handle: 'john_doe',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
}

const testimonials = [
    [
        {
            body: 'This keyboard has transformed my work experience. The keys are responsive and the backlighting is perfect for late-night sessions. Couldn’t be happier with my purchase.',
            author: {
                name: 'Jane Smith',
                handle: 'janesmith',
                imageUrl:
                    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            body: 'As a professional gamer, I need the best equipment. This keyboard delivers on all fronts. The customization options and the feel of the keys are just what I need to stay competitive.',
            author: {
                name: 'Alex Johnson',
                handle: 'alexjohnson',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
    ],
    [
        {
            body: 'The customer service is outstanding. They helped me choose the perfect keyboard for my needs. I couldn’t be more satisfied with my purchase.',
            author: {
                name: 'Emily Davis',
                handle: 'emilydavis',
                imageUrl:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            body: 'I’ve tried many keyboards, but this one stands out. The tactile feedback and the overall quality are just fantastic. I would highly recommend it to anyone.',
            author: {
                name: 'Michael Brown',
                handle: 'michaelbrown',
                imageUrl:
                    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
    ],
]

export default function TestimonialSection() {
    return (
        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
            <div
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                aria-hidden="true"
            >
                <div
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Reviews</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Satisfied Customer Give There Valuable Reviews
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                            <p>{`“${featuredTestimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                            <img
                                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                src={featuredTestimonial.author.imageUrl}
                                alt=""
                            />
                            <div className="flex-auto">
                                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                            </div>
                            <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
                        </figcaption>
                    </figure>
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((testimonial, testimonialIdx) => (
                                <figure
                                    key={testimonial.author.handle}
                                    className={classNames(
                                        (columnGroupIdx === 0 && testimonialIdx === 0) ||
                                            (columnGroupIdx === testimonials.length - 1 && testimonialIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 space-y-8 xl:space-y-0'
                                    )}
                                >
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                                        <div>
                                            <div className="font-semibold">{testimonial.author.name}</div>
                                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
