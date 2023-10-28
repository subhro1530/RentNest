import React from "react";
import Navbar from "../../../components/navbar";
import styles from "/styles/new_add_prop.module.css";
import Link from "next/link";

const pricing = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.block}>
        <ul className={styles.listItems}>
          <a href="/property/prop/property">Property</a>
          <a className={styles.on} href="/property/prop/basicinfo">
            Basic Info
          </a>
          <a href="/property/prop/address">Address and Map location</a>
          <a href="/property/prop/description">Property Description</a>
          <a href="/property/prop/photos">Photos and Videos</a>
          <a className={styles.on} href="/property/prop/pricing">
            Pricing
          </a>
        </ul>
      </div>
      This is pricing page
    </div>
  );
};

export default pricing;
