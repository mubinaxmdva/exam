import logo from "../assets/logo.svg";
import Button from "./button";

function Navbar() {
  return (
    <section className='navbar'>
        <img src={logo} alt="Logo" />
        <div className="navcon">
            <a>Home</a>
            <a>Feature</a>
            <a>About</a>
            <a>Product</a>
            <Button>Shop Now</Button>
        </div>
    </section>
  )
}

export default Navbar