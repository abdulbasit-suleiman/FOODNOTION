import { motion } from "framer-motion";
function Hero() {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="hero-container">
      <div className="hero-side">
        <motion.span className="hero-text1"
         initial={{opacity:0 ,x:-50}}
         animate={{opacity:1,x:0}}
         transition={{duration:3}}
        >body building food</motion.span>
        <motion.div className="hero-text2" 
        initial={{opacity:0 ,y:100}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        >
          <motion.span className=""
          initial={{opacity:0 ,y:-50}}
          animate={{opacity:1,y:0}}
          transition={{duration:2}}
          >trending delicacies</motion.span>
          <span> fill your tummy with delicious and mouth watering meal </span>
        </motion.div>
      </div>
      <div className="middle-hero">
        <div
       initial={{ bottom: '2rem' }}
       whileInView={{ bottom: '0rem' }}
       transition={transition}
          className="middle-hero-side"
        >
          <img src="./asset/hero.jpg"   
           className="hero-img" />
          <motion.div
          transition={transition}
          initial={{right:'6%'}}
          whileInView={{right:'1%'}}
          className="cart2">
            <p>U</p>
            <div className="hero-signup">
              <motion.span
               initial={{opacity:0 ,x:50}}
               animate={{opacity:1,x:0}}
               transition={{duration:2}}
              >Best signup place</motion.span>
              <div style={{ fontSize: "20px" }}>{"->"}</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero-side hero-side2">
       <motion.div 
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:3}}

        className="traffic">
          <span>10.5m</span>
          <span> Monthly traffic</span>
        </motion.div>
        <motion.div className="customers" 
         initial={{opacity:0,y:50}}
         animate={{opacity:1,y:0}}
         transition={{duration:3}}
 >
          <span 
          >OVER 100k</span>
          <span>Happy customer</span>
        </motion.div>
      </div>
    </div>
  );
}
export default Hero;
