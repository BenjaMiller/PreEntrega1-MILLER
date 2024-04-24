import "./navbar.css"
import CarWidget from "./CarWidget"
import ItemListConteiner from "../ItemListConteiner/ItemListConteiner"

const NavBar = () => {


    return (
        <div className="nav-bar">
    <div className="logo">
        <img style={{width: "100px"}} src="https://i.pinimg.com/736x/b9/95/51/b9955102c7eedd6e1ec33a2e7294809d.jpg" alt="logo" />
    </div>
    <ul class="zapatillas">
        <li>Nike Jordan</li>
        <li>Nike TravisScott</li>
        <li>Nike Lower</li>
    </ul>
    <div className="car-widget">
        <CarWidget/>
    </div>
</div>

    )
}

export default NavBar