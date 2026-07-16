import {ebag} from "../data/Ebag"
function ElectronBags() {
  return (
    <section className="sectionEB">
      <div className="bagTypes">
      <a className="a">Water Resistant</a>
      <a className="a">Charging System</a>
      <a className="a">Artificial Leather</a>
      <a className="a">Modern Clothes</a>
      </div>
      <div className="imgs">

      {ebag.map((bag) => (
     <div className="cart"> <img key={bag.id} src={bag.img} alt="" /></div>
))}
</div>
    </section>
  )
}

export default ElectronBags