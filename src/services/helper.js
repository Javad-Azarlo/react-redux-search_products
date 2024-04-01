const shortenText = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};
const filterProducts = (data, srch) => {
  if (!srch) return data;
  const filterProd = data.filter((item) =>
    item.title.toLowerCase().trim().includes(srch)
  );
  return filterProd;
};
const categProduct = (data, srch) => {
  if (!srch) return data;
  console.log(data, srch);
  return data.filter((item) => item.category === srch);
};
const queryFunc = (query, newQuery) => {
  if (newQuery.val === "") {
    const { val, ...rest } = query;
    return rest;
  }
  if (newQuery.categuries === "all") {
    const { categuries, ...rest } = query;
    return rest;
  }
  return { ...query, ...newQuery };
};
const getInitialQuery = (serachParams) => {
  const newQuery = {};

  const val = serachParams.get("val");
  const categ = serachParams.get("categuries");
  if (val) {
    newQuery.val = val;
  }
  if (categ) {
    newQuery.categuries = categ;
  }
  return newQuery;
};
const detailsProduct = (data, id) => {
  return data.find((item) => item.id === id);
};
const countReduce = (data) => {
  return data.reduce((a, b) => a + b.quantity, 0);
};
const totlaReduce = (data) => {
  return data.reduce((a, b) => a + b.quantity * b.price, 0);
};
const quantityFunc = (state, id) => {
  const index =  state.item.findIndex((item) => item.id === id);
  if(index === -1){
    return 0
  }
  else{
    return state.item[index].quantity;
  }
};
export {
  filterProducts,
  shortenText,
  categProduct,
  queryFunc,
  getInitialQuery,
  detailsProduct,
  countReduce,
  totlaReduce,
  quantityFunc,
};
