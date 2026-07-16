import background2 from "../assets/background2.svg"
import leftImg from "../assets/leftImg.svg"
import rightImg from "../assets/rightImg.svg"
import mainImg from "../assets/mainImg.svg"
import Button from "./Button"
function SchoolBags() {
  return (
    <section className="sbSection">
      <img className="img1" src={background2}/>
      <img className="img2" src={leftImg}/>
      <img className="img3" src={rightImg}/>
      <img className="img4" src={mainImg}/>
      <div className="sbcon">
          <h3>Creative bag only for you.</h3>
          <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed do eiusmod.</h2>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam.</p>
          <Button>See More</Button>
      </div>
    </section>
  )
}

export default SchoolBags