import React from "react";

import resumeSvg from "../../assets/resume.svg";
import resume from "../../assets/resume.png"
import styles from "./Header.module.css";

function Header() {
  return (
    <>
 <div className={styles.nav}>
 <ul>

  <li><a href="/"><img src={resume} alt="logo" /></a></li>
 
</ul>
   
    
  </div>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
    </>
  );
}

export default Header;