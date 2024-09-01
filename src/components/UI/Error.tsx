import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

interface IError {
    error: string;
}

const Error: React.FC<IError> = ({ error }) => {
    return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Error;
