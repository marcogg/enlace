import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {

        // Animation Menu on scorll
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScrolled(!isScrolled)
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    /** * Mobile nav toggle */

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className={`header fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to={'/'} className="logo d-flex align-items-center">
                        <img src="./../../logo-enlace-horizontal.svg" width={150} />
                    </Link>
                    <nav id="navbar" ref={navRef} className={`navbar ${isOpen ? 'navbar-mobile' : ''}`}>
                        <ul>
                            <li><Link className="nav-link scrollto active" to={'/'}>Inicio</Link></li>
                            <li><Link className="nav-link scrollto" to={'/#nosotros'}>Nosotros</Link></li>
                            <li className={`dropdown ${navRef.current && navRef.current.classList.contains('navbar-mobile') ? 'dropdown-active' : ''}`}><span>Planes de protección</span> <Icon.ChevronDown />
                                <ul>
                                    <li className="dropdown"><Link><span>Planes financieros</span> <Icon.ChevronRight /></Link>
                                        <ul>
                                            <li><Link to={'/ahorro-para-retiro'}>Proyecta: Plan para el retiro con seguro de vida e invalidez</Link></li>
                                            <li><Link to={'/plan-de-ahorro-para-educacion'}>Profesional: Plan para la educación de tus hijos</Link></li>
                                            <li><Link to={'/plan-de-inversion-para-ahorro'}>Capitaliza: Para inversión de ahorro con deducibilidad</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/seguro-para-auto'}>Seguro de Auto</Link></li>
                                    <li><Link to={'/seguro-gastos-medicos-mayores'}>Seguro de Gastos Médicos Mayores</Link></li>
                                    <li><Link to={'/seguro-para-hogar'}>Seguro para el hogar</Link></li>
                                </ul>
                            </li>
                            <li><Link className="getstarted scrollto" href="#about">Cotiza ahora</Link></li>
                        </ul>
                        <Icon.List className={`mobile-nav-toggle ${isOpen ? 'color-white' : ''}`} onClick={toggleMenu} />
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}
        </>
    )
}

export default Nav