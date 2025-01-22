import {Outlet, Link} from 'react-router'

function Layout(){
    return(
        <div className={"mx-auto w-screen-xl"}>
            <nav className={"flex gap-4"}>
                <Link to={'/'} className="italic p-4 font-bold">Home</Link>
                <Link to={'/about'} className="italic p-4 font-bold">About</Link>
                <Link to={'/companys'} className="italic p-4 font-bold">Companies</Link>
                <Link to={'/companys/create'} className="italic p-4 font-bold">Create companies</Link>
            </nav>
            <header>

            </header>
            <main>
            <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Layout;