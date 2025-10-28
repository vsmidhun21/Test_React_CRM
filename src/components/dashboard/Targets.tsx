import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";

export default function MonthlyTarget() {
    // const series = [73.33];

    const [series, setSeries] = useState([0]);
    const [executedDays, setExe] = useState(null);
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth(); // 0-based index (0 = January)

        // const daysInMonth = new Date(year, month + 1, 0).getDate();
        const targetDays = 30;

        let executedDays = 0;

        for (let day = 1; day <= today.getDate(); day++) {
            const date = new Date(year, month, day);
            const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

            if (dayOfWeek != 0) {
                executedDays++;
            }
        }

        setExe(executedDays);

        const percent = ((executedDays / targetDays) * 100).toFixed(2);
        setSeries([parseFloat(percent)]);
    }, []);

    const options: ApexOptions = {
        colors: ["#465FFF"],
        chart: {
            fontFamily: "Outfit, sans-serif",
            type: "radialBar",
            height: 330,
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -85,
                endAngle: 85,
                hollow: {
                    size: "80%",
                },
                track: {
                    background: "#E4E7EC",
                    strokeWidth: "100%",
                    margin: 5, // margin is in pixels
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        fontSize: "36px",
                        fontWeight: "600",
                        offsetY: -40,
                        color: "#1D2939",
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                },
            },
        },
        fill: {
            type: "solid",
            colors: ["#465FFF"],
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Progress"],
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                            Coding Activity Tracker
                        </h3>
                        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                            30 coding days each month
                        </p>
                    </div>
                </div>
                <div className="relative ">
                    <div className="max-h-[330px]" id="chartDarkStyle">
                        <Chart
                            options={options}
                            series={series}
                            type="radialBar"
                            height={330}
                        />
                    </div>

                    <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        +1 Day
                    </span>
                </div>
                <p className="mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
                    1 Day higher than last month. Keep up your good work!
                </p>
            </div>

            <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
                <div>
                    <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                        Target
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        30 Days
                    </p>
                </div>

                <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

                <div>
                    <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                        Completed
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        {executedDays} Days
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                                fill="#039855"
                            />
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    );
}
