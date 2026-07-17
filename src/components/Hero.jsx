import stylish from "../assets/stylish.svg"
import Button from "./button"
import image from "../assets/image.svg"
import backgroundImage from "../assets/backgroundImage.svg"
function Hero() {
  return (
    <section>
        <div className="herocon">
        <h3>Look Stylish Be Stylish.</h3>
        <h1>Look Stylish <br/>Be <img className="stylish" src={stylish} alt="stylish"/> </h1>
        <p>Before starting this business you should have ideas <br/> about the market and products to Compete with <br /> the Existing Businesses.</p>
        <Button>Join Shop</Button>
        </div>
        <img className="backgroundImage" src={backgroundImage} alt="" />
        <img className="image" src={image} alt="" />
    </section>
  )
}

export default Hero