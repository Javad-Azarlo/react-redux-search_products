import React from "react";
import SideBar from "../components/SideBar";
import Bascket from "../components/Bascket";
import styles from "./CheckOut.module.css";
import { useSelector } from "react-redux";
import emptyCart from "../assets/empty-cart.png"
function CheckOut() {
  const state = useSelector(store => store.cart);
  const {item , count , totla , check} = state;
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.products}>
        {count ? 
        item.map(i => <Bascket key={i.id} data={i}/>)
        :
        <img src={emptyCart}/>
      }
      </div>
    </div>
  );
}

export default CheckOut;
