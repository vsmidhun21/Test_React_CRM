import {
    DocsIcon,
    UserIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function ProjetCounts() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <DocsIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Total Projects
                            </span>
                            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                                10 +
                            </h4>
                        </div>
                        <Badge color="success">
                            Completed + Ongoing
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                        <UserIcon className="text-gray-800 size-6 dark:text-white/90" />
                    </div>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Total Experience
                            </span>
                            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                                1.5 Yr
                            </h4>
                        </div>
                        <Badge color="success">
                            Professional + Internships
                        </Badge>
                    </div>
                </div>
            </div>
        </>
    );
}
