import { Routes, Route, Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <header className='shadow-sm bg-white'>

                <nav className="navbar navbar-expand-lg navbar-light px-4 container py-3">

                  <div className="d-flex w-25 justify-content-between align-items-center">
                    {/* logo */}
                        <Link to="/">
                            <img
                                src="/img/Logo.png"
                                alt="Snowell Electric"
                                style={{ height: '50px' }} />
                        </Link>

                        {/* Toggle button khi ở mobile */}
                        <button
                            className="navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
 
                    {/* navbar */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item mx-2'>
                                <Link to="/" className='nav-link active text-dark'>Home</Link></li>
                            <li class="nav-item mx-2 dropdown">
                                <Link to="/Product" class="nav-link dropdown-toggle  text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/Product" class="dropdown-item" href="#">LED and Lighting</Link></li>
                                    <li><Link to="/Product" class="dropdown-item" href="#">Fans</Link></li>
                                    <li><Link to="/Product" class="dropdown-item" href="#">Heater</Link></li>
                                    <li><Link to="/Product" class="dropdown-item" href="#">Vacuum Cleaner</Link></li>
                                    <li><Link to="/Product" class="dropdown-item" href="#">Air Purifier</Link></li>
                                    <li><Link to="/Product" class="dropdown-item" href="#">Geysers</Link></li>
                                    <li><Link to="/Product" class="dropdown-item" href="#">Kitchen</Link></li>
                                </ul>
                            </li>
                            <li className='nav-item mx-2'><Link to="/News" className='nav-link text-dark'>News</Link></li>
                            <li className='nav-item mx-2'><Link to="/Aboutus" className='nav-link text-dark'>About Us</Link></li>
                            <li className='nav-item mx-2'><Link to="/Contactus" className='nav-link text-dark'>Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>


        </>
    )
}

export default Header;