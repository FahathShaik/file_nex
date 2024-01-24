import mainIcon from '../assets/folder.png'

function Header() {
    return (
        <>
            <nav className="navbar bg-light" >
                <div className="container-fluid">
                    <a className="navbar-brand">
                    <img className="mainIcon" src={mainIcon} />&nbsp; FileNex</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header