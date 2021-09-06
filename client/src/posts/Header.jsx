import React from "react";
import styles from "./posts.module.css";
import logo from "../images/chit.com.png";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.site_title}>
          <img src={logo} alt="log" className={styles.logo} />
        </div>
        <div className={styles.description}>
          Essays, opinions, and advice on the act of computer programming from
          Stack Overflow.
        </div>
        <div className={styles.input}>
          <form>
            <label>
              <input type="search" placeholder="search" value="" />
            </label>
            <input type="submit" value="Search" />
          </form>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </header>
    </>
  );
}

export default Header;
