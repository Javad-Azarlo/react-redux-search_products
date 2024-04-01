import React from "react";
import styles from "./Bascket.module.css";
import { quantityFunc } from "../services/helper";
import { useDispatch, useSelector } from "react-redux";
import { deCrese, inCrese, removeItem } from "../features/cart/cart";
import { MdDeleteOutline } from "react-icons/md";
function Bascket({ data }) {
  const state = useSelector((store) => store.cart);
  const { image, title, price, quantity, category, description, id } = data;
  const quty = quantityFunc(state, id);
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className={styles.action}>
        {quty === 1 ? (
          <button onClick={() => dispatch(removeItem(data))}><MdDeleteOutline/></button>
        ) : (
          <button onClick={() => dispatch(deCrese(data))}>-</button>
        )}
        {quty > 0 && <span>{quty}</span>}
        <button onClick={() => dispatch(inCrese(data))}> + </button>
      </div>
    </div>
  );
}

export default Bascket;
