import React from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from "react-redux";
function Layout({ children }) {
  const state = useSelector(store => store.cart.count)
  return (
    <div>
      <header className={styles.header}>
        <Link>Shopping</Link>
        <Link to="/checkOut">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state && <span>{state}</span>}

            {/* {!!state.itemCounter && <span>{state.itemCounter}</span>} */}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Javad Azarlouyeh ❤</p>
      </footer>
    </div>
  );
}

export default Layout;
