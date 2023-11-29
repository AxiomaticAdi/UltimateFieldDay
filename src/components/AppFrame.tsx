import { ReactNode } from "react";
import Header from "./Header";

export default function AppFrame({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <div className="mx-auto flex max-w-5xl items-center justify-center">
                {children}
            </div>
        </>
    );
}
