import React from "react";
import styles from "./SideBar.module.css";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { checkOut } from "../features/cart/cart";
function SideBar() {
  const state = useSelector((store) => store.cart);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total : </p>
        <span> {state.totla}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quntity : </p>
        <span> {state.count}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status : </p>
        <span>{!state.check && "Pending"}</span>
      </div>
      <button onClick={() => dispatch(checkOut())}>CheckOut</button>
    </div>
  );
}

export default SideBar;
