import background2 from "../assets/background2.svg"
import leftImg from "../assets/leftImg.svg"
import rightImg from "../assets/rightImg.svg"
import mainImg from "../assets/mainImg.svg"
function SchoolBags() {
  return (
    <section className="sbSection">
      <img className="img1" src={background2}/>
      <img className="img2" src={leftImg}/>
      <img className="img3" src={rightImg}/>
      <img className="img4" src={mainImg}/>
      <div className="sbcon">
          <h3>Creative bag only for you.</h3>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad voluptates magni.</h2>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </section>
  )
}

export default SchoolBags