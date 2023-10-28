import React from "react";
import Navbar from "../../../components/navbar";
import styles from "/styles/new_add_prop.module.css";
import Link from "next/link";

const Property = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body2}>
        <p>
          Property Type<small>*</small>
        </p>
        <select name="property" id="property">
          <option value="guest">Guest House</option>
          <option value="pg">PG</option>
          <option value="dorm">Dormatory</option>
          <option value="normal">Normal Hotel</option>
          <option value="deluxe">Deluxe Hotel</option>
          <option value="spdeluxe">Super Deluxe Hotel</option>
        </select>
        <p>
          Title for your listing<small>*</small>
        </p>
        <textarea name="title" id="" cols="30" rows="5"></textarea>
        <small>Max 300 characters</small>
        <div className={styles.tip}>
          <p>
            <b>Tip:</b> Put something attention grabbing and descritive for the
            title. Below are some examples:
          </p>
          <ul>
            <li>Georgious Hideout | Close to everything</li>
            <li>Charming Cottage 1 min wait towards market.</li>
            <li>Spacious Apartment with parking lot and elevator support.</li>
          </ul>
          <Link href="/property/prop/basicinfo" className={styles.savebtn}>
            Save & Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property;
