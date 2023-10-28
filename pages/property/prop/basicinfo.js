import React from "react";
import Navbar from "../../../components/navbar";
import styles from "/styles/new_add_prop.module.css";

const basicinfo = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body3}>
        {/* this is basic info */}
        <div className={styles.body}>
          <div className={styles.block}>
            <ul className={styles.listItems}>
              <a href="/property/prop/property">Property</a>
              <a className={styles.on} href="/property/prop/basicinfo">
                Basic Info
              </a>
              <a href="/property/prop/address">Address and Map location</a>
              <a href="/property/prop/description">Property Description</a>
              <a href="/property/prop/photos">Photos and Videos</a>
              <a href="/property/prop/pricing">Pricing</a>
            </ul>
          </div>
          <div className={styles.block4}>
            <div className={styles.top}>
              <div className={styles.smallBlock}>
                <p>Bed Room</p>
                <select name="bedroom" id="bedroom">
                  <option value="">Dormatory type</option>
                  <option value="">Spacious</option>
                  <option value="">Less spacious</option>
                </select>
              </div>
              <div className={styles.smallBlock}>
                <p>Beds</p>
                <select name="bedroom" id="bedroom">
                  <option value="">Single Bed</option>
                  <option value="">Double Bed</option>
                  <option value="">Deluxe Bed</option>
                </select>
              </div>
              <div className={styles.smallBlock}>
                <p>Bathrooms</p>
                <select name="bedroom" id="bedroom">
                  <option value="">Single</option>
                  <option value="">Double</option>
                  <option value="">Bathroom with Bathtub</option>
                </select>
              </div>
              <div className={styles.smallBlock}>
                <p>Free Guest</p>
                <select name="bedroom" id="bedroom">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <small>No. of guest included in Rent.</small>
              </div>
              <div className={styles.smallBlock}>
                <p>Max Guest</p>
                <select name="bedroom" id="bedroom">
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
                <small>
                  How many maximum guest your listing can accomodate.
                </small>
              </div>
            </div>
            <h2>Amenities</h2>
            <div className={styles.bottom}>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Wifi Facilities</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Breakfast</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Lunch</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Balcony</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Car Parking</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Swimming Pools</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Elevator</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check">
                  Necessary commodities like towels, soaps, etc
                </label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check">
                  Air Conditioner
                </label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Commodities such as toilet papers</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Locks on doors</label>
              </div>
              <div className={styles.checkblock}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="check"> Local transport facilities</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default basicinfo;
