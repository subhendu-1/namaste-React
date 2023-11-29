import { LOGO_URL } from "../utils/constantes";

const Heading = () => {
    return (
        <div className="header">
               
                <div className="log-container">
                    <img className="logo" src={LOGO_URL} />
                </div>
                
                <div className="nav_items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
        </div>
    );

}

export default Heading;