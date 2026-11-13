import logo from '../assets/tr_logo_3x.avif';

function Header() {

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Tel-Ran" className="header-logo" />
                </div>
            </div>

            {/*<h1>КАТАЛОГ КУРСОВ</h1>*/}

            {/*<p>Список курсов</p>*/}

        </header>

    );

}

export default Header;