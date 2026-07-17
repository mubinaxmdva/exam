import background3 from "../assets/background3.png"
import Button from "./button"

function BuySection() {

  return (
    <section className='buy-section'>
      <img src={background3} alt="" />
      <div className="buyS-con">
        <h2 className="whiteh2">Lorem ipsum dolor sit amet <br /> adipiscing elit.</h2>
        <input className="name" type="text" placeholder="Name" />
        <input className="name" placeholder="Email" type="email" />
        <input className="address" placeholder="Address" type="text" />
        <div className="checkcon" > <input className="check" type="checkbox"/> <p>Lorem ipsum dolor sit amet.</p></div>
        <Button>Join Now</Button>
      </div>
    </section>
  )
}

export default BuySection