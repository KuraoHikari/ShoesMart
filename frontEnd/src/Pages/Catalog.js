import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes, fetchShoesCatalog } from "../store/action";
import Card from "../components/card";

function Catalog() {
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");
  const [price, setPrice] = useState(1000000);
  const dispatch = useDispatch();
  const server = useSelector((state) => ({
    state,
  }));
  function getPrice(price) {
    setPrice((+price / 100) * 1000000);
  }
  function searchShoes() {
    console.log(color);
    dispatch(fetchShoesCatalog(color, price, size));
    fetchShoesCatalog();
  }
  useEffect(() => {
    dispatch(fetchShoes(20));
  }, []);

  return (
    <div className="w-5/6 py-5 my-5 mr-10">
      <div className="px-10 py-10 my-5 bg-base-200 shadow-lg rounded-box grid grid-cols-4 gap-4">
        <div>
          <span className="text-2xl font-semibold ">Sort</span>
          <div>
            <button className="btn shadow-md  border-none mr-3 my-1">
              Ascending
            </button>
            <button className="btn shadow-md  border-none mr-3 my-1">
              Descending
            </button>
            <button className="btn shadow-md  border-none mr-3 my-1">
              Lower Price
            </button>
            <button className="btn shadow-md  border-none mr-3 my-1">
              Hinger Price
            </button>
            <button className="btn shadow-md  border-none mr-3 my-1">
              Newest
            </button>
            <button className="btn shadow-md  border-none mr-3 my-1">
              Oldest
            </button>
          </div>
        </div>
        <div>
          <span className="text-2xl font-semibold">Color</span>
          <div className="">
            <button
              className={
                color === "Blue"
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setColor("Blue")}
            >
              Blue
            </button>
            <button
              className={
                color === "Purple"
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setColor("Purple")}
            >
              Purple
            </button>
            <button
              className={
                color === "White"
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setColor("White")}
            >
              White
            </button>
            <button
              className={
                color === "Pink"
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setColor("Pink")}
            >
              Pink
            </button>
            <button
              className={
                color === "all"
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setColor("all")}
            >
              ALL
            </button>
          </div>
        </div>
        <div>
          <span className="text-2xl font-semibold">Size</span>
          <div className="">
            <button
              className={
                size === "all"
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize("all")}
            >
              all
            </button>
            <button
              className={
                size === 29
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(29)}
            >
              29
            </button>
            <button
              className={
                size === 30
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(30)}
            >
              30
            </button>
            <button
              className={
                size === 31
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(31)}
            >
              31
            </button>
            <button
              className={
                size === 32
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(32)}
            >
              32
            </button>
            <button
              className={
                size === 33
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(33)}
            >
              33
            </button>
            <button
              className={
                size === 34
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(34)}
            >
              34
            </button>
            <button
              className={
                size === 35
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(35)}
            >
              35
            </button>
            <button
              className={
                size === 36
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(36)}
            >
              36
            </button>
            <button
              className={
                size === 37
                  ? "btn btn-active shadow-md  mr-3 my-1"
                  : "btn shadow-md btn-outline  mr-3 my-1"
              }
              onClick={() => setSize(37)}
            >
              37
            </button>
          </div>
        </div>
        <div>
          <span className="text-2xl font-semibold">Price Range</span>
          <div className="justify-between flex mt-5">
            <div>
              <span className="">Rp. 0</span>
            </div>
            <div>
              <span className="">Rp. 1000.000</span>
            </div>
          </div>
          <input
            type="range"
            max="100"
            class="range"
            onChange={(e) => getPrice(e.target.value)}
          />
          <button
            className="btn shadow-md   mr-3 my-1"
            onClick={() => searchShoes()}
          >
            Search
          </button>
        </div>
      </div>
      <div className="my-5 grid grid-cols-5 ">
        {server?.state?.fetch?.dataShoes.map((el) => {
          return <Card detail={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;
