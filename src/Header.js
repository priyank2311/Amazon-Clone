import { Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './Header.css';
import { useStateValue } from './StateProvider';
//import SearchIcon from "@material-ui/icons/Search";

function Header() {
    const [{basket, user}] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    //console.log(basket);
    
    return (
        <nav className='header'>
            <Link to="/">
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <img className="header__searchIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACC0lEQVRYR+2Xjy0FQRCHf68CSqACVIAKUAE6oAJUQAeoABWgAlSADqiAfMlOMll3tzPvxXOSN8kll9zu7Pd+82/fRCOzych49K+BViTtSNqSxPt6UfdZ0pukB0l35X1q4SMKcfiJpIPgKVeSzqYFawHtSrqUtByEsWUfkg4l3Sb3DeYQigDj7VESChAmHozQ8bB+s1oPFOvD1qcQytw4Ly+SjkqeDDknvy4krblFexmluoDImScXJmA4iDBEjPCS4AbFvtXo/i4gJN4vJ2dhDLiGuo4WRQ2EOq9Ohu1AmPpUQ9V79xGVaA+DVgORJ+dlBwmM01mM0FmiH5f8SgFRpjQ/LF0hHSf5SqVpUiwpIErZknHDlXbLT9932gEFguEbnymgL7e61TRbvu17ymd9aGpzkCjlswb6zZC9l6GcCtnoktqXPSVLH5rFZi770TVG1PCjg5xCpegcMzUZHXRpu8RNPTpwiEqALLn+kYGqYT6Lz9CPil4/AKT1kxNDxqhh9JgyrKVQuIKEbKj5dV3QACKk3AL8BY3uzvq+2cceRlHTWt2Y2YMzC1/TYVlAmIC3uWi52YRqAVlOnbo7UguKBKZ9kDO+QEJQESADINlRzP4G2RCmAxM+FCFf6jtPCioD1FJm6HsYal5AdX/rDd88gWqozgvgvIEMytrHjzD/BdBgLi6AWqW6UKil0Df9qnMlpH4q/QAAAABJRU5ErkJggg==" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__basketLink">
                    <div className="header__optionBasket">
                        <img className="header__basketLinkNew" src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG65.png" alt="" />
                        <span className="header__link header__backetCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    );
}

export default Header;
