import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";

// Schelet comun pentru toate paginile aplicației
export function Layout() {
    return (
        <>
            <NavBar/>

            {/* Se incarca ruta curenta */}
            <main>
                <Outlet/>
            </main>
        </>
    );
}