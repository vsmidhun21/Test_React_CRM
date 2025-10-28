import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

import Python from "../../../public/images/certificate/python.jpg";
import FullStack from "../../../public/images/certificate/python_full_stack.jpg";
import Default from "../../../public/images/certificate/default.jpg";

// Define the TypeScript interface for the table rows
interface Product {
    id: number;
    name: string; // Product name
    variants: string;
    price: string;
    image: string; // URL or path to the product image
    status: "Completed" | "Ongoing" | "Planned"; // Status of the product
}

// Define the table data using the interface
const tableData: Product[] = [
    {
        id: 1,
        name: "Crash Course on Python",
        variants: "2023",
        price: "Coursera",
        status: "Completed",
        image: Python, // Replace with actual image URL
    },
    {
        id: 2,
        name: "Python Full Stack",
        variants: "2024",
        price: "Coapps",
        status: "Completed",
        image: FullStack,
    },
    {
        id: 3,
        name: "DevOps",
        variants: "2025",
        price: "Youtube",
        status: "Ongoing",
        image: Default,
    },
    {
        id: 4,
        name: "CEH",
        variants: "2026",
        price: "Self Learning",
        status: "Planned",
        image: Default,
    },
];

export default function RecentOrders() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Certificate / Achievement Status
                    </h3>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    {/* Table Header */}
                    <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Certificate
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Platform
                            </TableCell>
                            
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {tableData.map((product) => (
                            <TableRow key={product.id} className="">
                                <TableCell className="py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <img
                                                src={product.image}
                                                className="h-[50px] w-[50px]"
                                                alt={product.name}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                {product.name}
                                            </p>
                                            <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                {product.variants}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    {product.price}
                                </TableCell>
                                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <Badge
                                        size="sm"
                                        color={
                                            product.status === "Completed"
                                                ? "success"
                                                : product.status === "Ongoing"
                                                    ? "info"
                                                    : "warning"
                                        }
                                    >
                                        {product.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
