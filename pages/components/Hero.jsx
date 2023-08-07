function Hero(){
    return(
    <div className="hero-container">
        <div className="hero-side">
            <span className="hero-text1">body building food</span>
            <div className="hero-text2">
            <span className="">trending delicacies</span>
            <span> fill your tummy with delicious and mouth watering meal </span>
            </div>
        </div>
        <div className="middle-hero">
        <div className="middle-hero-side">
                <img src="./asset/hero.jpg"  className="hero-img" />
                <div className="cart2" >
                    <p>U</p>
            <div className="hero-signup">
                <span>Best signup place</span>
            <div style={{fontSize:'20px'}}>
                {'->'}
            </div>
            </div>
                </div>
                </div>
        </div>
        <div className="hero-side">
        <div className="traffic">
            <span>10.5m</span><span> Monthly traffic</span>
                
                </div>
                <div className="customers">
                    <span>OVER 100k</span><span>Happy customer</span>
                </div>
        </div>
    </div>
    )
}
export default Hero;