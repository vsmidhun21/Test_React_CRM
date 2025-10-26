
export default function EcommerceMetrics() {
    return (

        <div className="w-full dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Cover Image */}
            <div className="relative">
                <img
                    src="../../../public/images/dashboard/cover.jpg"
                    alt="Cover"
                    className="w-full h-48 object-cover"
                />
                {/* Profile Image */}
                <div className="absolute -bottom-12 left-6">
                    <img
                        src="../../../public/images/dashboard/profile.jpg"
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
    );
}
