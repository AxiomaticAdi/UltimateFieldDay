import React from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
    linkTo: string;
    children: React.ReactNode;
}
export default function CustomLink({ linkTo, children }: CustomLinkProps) {
    return (
        <Link
            to={linkTo}
            className="text-blue-300 underline hover:text-blue-800"
        >
            {children}
        </Link>
    );
}
