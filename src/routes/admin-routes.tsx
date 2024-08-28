const adminRoutes = [
    {
        index: true,
        path: "/admin",
        element: <h1>Admin Home</h1>
    },
    {
        path: "room-management",
        element: <h1>Room Management</h1>
    },
    {
        path: "slots-management",
        element: <h1>Slots Management</h1>
    },
    {
        path: "booking-management",
        element: <h1>Booking Management</h1>
    },
]

export default adminRoutes;