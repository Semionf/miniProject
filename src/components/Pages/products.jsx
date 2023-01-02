import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/service";
import "./style.css";

export const Products = () => {
  const [productsArr, setProducts] = useState([]);
  const descArr = [];
  const [display, setDisplay] = useState(false);
  const [key, setKey] = useState();

  const productsData = async () => {
    let product = await getProducts();
    setProducts(product);
  };

  const handleDelete = async (ID) => {
    let temp = productsArr.filter((p) => p.ID !== ID);
    setProducts(temp);
    await deleteProduct(ID);
  };

  const DescriptionDesplay = (ID) => {
    if (descArr[ID - 1] === undefined) {
      setDisplay(!display);
      descArr[ID - 1] = display;
      console.log(descArr[ID - 1]);
      setKey(ID);
      return;
    }
    descArr[ID - 1] = !descArr[ID - 1];
  };

  useEffect(() => {
    productsData();
  }, []);

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Units in stock</th>
            <th> Description / Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsArr.length >= 0 &&
            productsArr.map((Product) => {
              return (
                <>
                  <tr>
                    <th scope="row">{Product.Name}</th>
                    <th>{Product.UnitPrice.Value}$</th>
                    <th>{Product.UnitsInStock}</th>
                    <th className="space">
                      {" "}
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          DescriptionDesplay(Product.ID);
                        }}
                      >
                        Description
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(Product.ID);
                        }}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                  {Product.ID === key && descArr.filter((m) => m === true) ? (
                    <tr>
                      <th colSpan={4}>
                        {Product.UnitsInStock} {Product.QuantityPerUnit}
                      </th>
                    </tr>
                  ) : null}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
