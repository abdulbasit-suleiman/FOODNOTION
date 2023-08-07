function Header(){
    return(
        <div className='header-container'>
        <div className="logo">
           <span className="header-logo">Foodn<span style={{color:'red'}}>o</span>tion</span>
        </div>
        <div className="right-logo">
            <div className="menu">
                <ul className="menu-list">
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>News</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div> 
            <input type="text" className="header-search" placeholder="search" />
          <p className="cart">U</p>
        </div>
        </div>
    )
}
export default Header;