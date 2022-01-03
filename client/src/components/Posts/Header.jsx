import React from "react";
import styles from "./headerPosts.module.css";
import logo from "../../images/ref-logo.png";
import {
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router";

function Header() {
  const history = useHistory();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.site_title}>
          <Typography variant="h6" onClick={() => history.push("/")}>
            <img src={logo} alt="log" className={styles.logo} />
          </Typography>
        </div>
        <div className={styles.description}>
          Здесь вы можете поделиться интересными постами. Просто и с
          комфортом :)
        </div>
        <div className={styles.input}>
          <div>
            <TelegramIcon fontSize="small" color="primary" />
          </div>
          <div>
            <WhatsAppIcon fontSize="small" color="primary" />
          </div>
          <div>
            <EmailIcon fontSize="small" color="primary" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
