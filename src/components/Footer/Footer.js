import React from "react";
import style from "./Footer.module.css"
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={style.footer}>
    <div className={style.section_padding}>
      <div className={style.sb_footer_links}>
            
          <div className={style.socialmedia}>
          <h2>Contact us: </h2>
            <h1><a href="https://twitter.com/Priyanshu_1105">
                <AiOutlineTwitter />
              </a></h1>
            <h1><a href="https://www.linkedin.com/in/priyanshu-negi-87a56124a/">
                <AiFillLinkedin  />
              </a></h1>
            <h1><a href="https://www.instagram.com/_priyansh_u123/">
                <AiFillInstagram />
              </a></h1>
            <h1><a href="https://t.me/+TvzqBchLVxNmNzk9">
                <BsTelegram />
              </a></h1>
          
        </div>
      </div>

    
      <div className={style.sb_footer_below}>
        <div className={style.sb_footer_copyright}>
          <p>
            @{new Date().getFullYear()} Resume Buddy. All right reserved by- Priyanshu Negi.
          </p>
        </div>
       
      </div>
    </div>

    </div>
  )
  };

export default Footer;