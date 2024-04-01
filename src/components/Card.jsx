import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText, quantityFunc } from "../services/helper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deCrese, inCrese, removeItem } from "../features/cart/cart";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const { image, title, id, price } = data;
  console.log(id);
  const state = useSelector((store) => store.cart);
  const quty = quantityFunc(state, id);
  // console.log(qaun)
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.action}>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
          <div>
            {quty === 1 && (
              <button onClick={() => dispatch(removeItem(data))}>
                <MdDeleteOutline />
              </button>
            )}
            {quty > 1 && <button onClick={() => dispatch(deCrese(data))}>-</button>}

            <span>{quty > 0 && quty}</span>
            {quty === 0 ? (
              <button onClick={() => dispatch(addItem(data))}>
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button onClick={() => dispatch(inCrese(data))}>+</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
