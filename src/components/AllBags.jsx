import {abag} from "../data/abag.js"
function AllBags() {
  return (
    <section className="allsec">
      <h2 className="h2">Our Available Product</h2>
      <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.</p>
      <div className="cartWrapper"> {abag.map((bag) => (
      <div style={{backgroundColor: bag.bc}} className="cart2"> <img key={bag.id} src={bag.img} alt="" /></div>
    ))}</div>
    <button className="seeMore">See More &rarr;</button>
    </section>
  )
}
export default AllBags