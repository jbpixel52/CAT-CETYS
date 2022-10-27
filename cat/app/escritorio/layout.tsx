import NavBar from "../../components/NavBar/navigationbar";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (<div>

        <>
           <NavBar/>
        </>
        <>
            {/* Body */}
            {children}
        </>
    </div>);
}