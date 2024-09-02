import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/features/auth/authSlice';

export default function UserData() {
    const user = useSelector(selectUser);

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">User Info</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">User Role</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.role}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.phone}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.address}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Profile Picture</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <img
                                src="/path/to/default/picture.jpg" // Replace with user.profilePic when available
                                alt="User Profile"
                                className="h-16 w-16 rounded-full"
                            />
                        </dd>
                    </div>
                    {/* Additional fields like attachments can go here */}
                </dl>
            </div>
        </div>
    );
}
