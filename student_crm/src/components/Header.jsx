import logo from '../assets/tr_logo_3x.avif';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Tel-Ran" className="header-logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;