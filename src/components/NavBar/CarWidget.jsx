import "./carwidget.css"
import { FaShoppingCart } from "react-icons/fa";

const CarWidget = () => {
  return (
    <div className="car-widget">
        <FaShoppingCart color="red" size={20}/>
        <p>1</p>
    </div>
  )
}

export default CarWidget