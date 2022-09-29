import reactIcon from '../../assets/React-icon.svg.png';
export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className='headerLogo' src={reactIcon} alt="react logo"></img><div className="navbar-header">header is not working</div>
                <ul className="navbar-items">
                    <li>
                        contact
                    </li>
                    <li>
                        price
                    </li>
                    <li>
                        about
                    </li>
                </ul>
            </nav>
        </header>
    )
}