import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../features/products/products";
import styles from "./ProductDetailsPage.module.css";
import { detailsProduct } from "../services/helper";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/Loader"
function ProductDetailsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { id } = useParams();
  const dataDetails = useSelector((store) =>
    store.prdct.data.find((item) => item.id === +id)
  );
  // const detailsPrd = detailsProduct(data, +id);
  // const { image, title, price, category, description } = detailsPrd;
  // console.log(detailsPrd);

  if (!dataDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={dataDetails.image} alt={dataDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{dataDetails.title}</h3>
        <p className={styles.description}>{dataDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {dataDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {dataDetails.price}
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
