import React from "react";
import Navbar from "../../../components/navbar";
import styles from "/styles/new_add_prop.module.css";

const prop = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.block}>
          <ul className={styles.listItems}>
            <a href="/property/prop/property">Property</a>
            <a href="/property/prop/basicinfo">Basic Info</a>
            <a className={styles.on} href="/property/prop/address">
              Address and Map location
            </a>
            <a href="">Property Description</a>
            <a href="">Photos and Videos</a>
            <a href="">Pricing</a>
          </ul>
        </div>
        <div className={styles.block2}>
          <div className={styles.inputBox}>
            <p>
              Address on Map<small className={styles.red_asterisk}>*</small>
            </p>
            <input type="text" placeholder="Type in an address" />
          </div>
          <p className={styles.warning}>
            Only confirmed guests and verified house owners can see this page.
          </p>
          <div className={styles.map}></div>
          <button>Save and Continue</button>
        </div>
        <div className={styles.block3}>
          <div className={styles.enter}>
            <label htmlFor="">Building Name/Number</label>
            <input type="text" />
          </div>
          <div className={styles.enter}>
            <label htmlFor="">Street/Locality Address</label>
            <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>
          <div className={styles.enter}>
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
          <div className={styles.enter}>
            <label htmlFor="">State</label>
            <input type="text" />
          </div>
          <div className={styles.enter}>
            <label htmlFor="">Country</label>
            <input type="text" />
          </div>
          <div className={styles.enter}>
            <label htmlFor="">Zip/Postal code</label>
            <input type="text" />
          </div>
          <div className={styles.enter}>
            <label htmlFor="">Landmark & directions</label>
            <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default prop;
