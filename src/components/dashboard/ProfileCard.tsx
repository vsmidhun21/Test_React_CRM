
import Cover from "../../../public/images/dashboard/cover.jpg";
import Profile from "../../../public/images/dashboard/profile.jpg";

export default function ProfileCard() {
    return (
        <>
            <div className="w-full h-full dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {/* Cover Image */}
                <div className="relative">
                    <img
                        src={Cover}
                        alt="Cover"
                        className="w-full h-52 object-cover"
                    />
                    {/* Profile Image */}
                    <div className="absolute -bottom-12 left-6">
                        <img
                            src={Profile}
                            alt="Midhun"
                            className="w-35 h-35 rounded-full border-4 border-white dark:border-gray-800 object-cover"
                        />
                    </div>
                </div>

                {/* Name and Headline */}
                <div className="mt-16 px-6 pb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Midhun V S
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Software Developer | Python Developer | AI-Powered Developer
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Madurai, Tamil Nadu, India</p>
                </div>
            </div>
        </>
    );
}
