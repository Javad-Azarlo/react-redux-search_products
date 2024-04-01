import React, { useEffect, useState } from "react";
import styles from "./ProductPages.module.css";
import { fetchData } from "../features/products/products";
import { useDispatch, useSelector } from "react-redux";
import { ImSearch } from "react-icons/im";
import sideBar from "../components/SideBar.module.css";
import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";
import liCateg from "../services/constanse";
import { useSearchParams } from "react-router-dom";
import { filterProducts, categProduct, queryFunc, getInitialQuery } from "../services/helper";

function ProductPages() {
  const [display, setDisplay] = useState([]);
  const [select, setSelect] = useState("");
  const [val, setVal] = useState("");
  const [srch, setSrch] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading } = useSelector((store) => store.prdct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    setDisplay(data);
    setSrch(getInitialQuery(searchParams))
  }, [data]);
  const searchHandler = () => {
    setSrch((srch) => queryFunc(srch, { val }));
    // setSrch((srch) => ({ ...srch, val }));
  };

  const liHandler = (e) => {
    const categuries = e.target.innerText.toLowerCase();
    setSelect(categuries);
    setSrch((srch) => queryFunc(srch, { categuries }));
    // setSrch((srch) => ({ ...srch, categuries }));
  };
  useEffect(() => {
    setSearchParams(srch);
    let newDisplay = filterProducts(data, srch.val);
    newDisplay = categProduct(newDisplay, srch.categuries);
    setDisplay(newDisplay);
    
  }, [srch]);

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {!!display.length &&
            display.map((item) => <Card key={item.id} data={item} />)}
        </div>
        <div className={sideBar.sidebar}>
          <div>
            <FaListUl />
            <p>Categuries</p>
          </div>
          <ul>
            {liCateg.map((item) => (
              <li
                className={
                  item.type.toLowerCase() === select ? sideBar.selected : null
                }
                onClick={liHandler}
                key={item.id}
              >
                {item.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductPages;
