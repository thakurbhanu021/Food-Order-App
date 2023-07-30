import { useRef, useState } from 'react';

import classes from './Checkout.module.css'

const isEmpty = value => value.trim() !== '';
const isSixChars = value => value.trim().length === 6;

const Checkout = (props) => {
    const [formInputsValidity , setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode : true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = isEmpty(enteredName);
        const enteredStreetIsValid = isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);
        const enteredCityIsValid = isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid = enteredCityIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredNameIsValid;

        if(!formIsValid) {
            return;
        }

        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode : enteredPostalCode,
        });
    }
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!formInputsValidity.name ? classes.invalid : ''}`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${!formInputsValidity.street ? classes.invalid : ''}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Enter a valid Street!</p>}
      </div>
      <div className={`${classes.control} ${!formInputsValidity.postalCode ? classes.invalid : ''}`}>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" ref={postalCodeInputRef}/>
        {!formInputsValidity.postalCode && <p>Enter a valid Postal Code!</p>}
      </div>
      <div className={`${classes.control} ${!formInputsValidity.city ? classes.invalid : ''}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
      <button type="button" onClick={props.onClick}>Cancel</button>
      <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
