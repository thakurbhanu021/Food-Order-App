import { Fragment } from "react";

import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Meals on a table" />
        </div>
    </Fragment>
}

export default Header;