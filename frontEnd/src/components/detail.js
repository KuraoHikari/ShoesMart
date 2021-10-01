import { useState } from "react";
function Detail({ detail }) {
  const [shoesData, setShoesData] = useState("Description");

  return (
    <div className=" bg-blue-100 mb-5 rounded-box p-5 ml-10  mr-10 flex">
      <div className=" w-3/4 grid grid-cols-2 gap-4">
        <div>
          <img
            src="https://s3.ap-southeast-1.amazonaws.com/source-shoesmart-v1.0/thumb_EURO_HS-431C-GRE.GREY.2.png"
            width="100%"
            className="rounded-box"
          />
        </div>
        <div className="my-10">
          <div className="mb-2 flex  justify-between ml-10 mr-10">
            <button
              className={
                shoesData === "Description" ? "btn btn-active" : "btn btn-ghost"
              }
              onClick={() => setShoesData("Description")}
            >
              Description{" "}
            </button>
            <button
              className={
                shoesData === "Details" ? "btn btn-active" : "btn btn-ghost"
              }
              onClick={() => setShoesData("Details")}
            >
              Details
            </button>
            <button className="btn btn-ghost">Instruction</button>
          </div>
          <div className="p-10 bg-base-100 h-1/2 rounded-box mb-16">
            {shoesData === "Description" ? (
              <p className="text-lg ">{detail?.description}</p>
            ) : shoesData === "Details" ? (
              <p className="text-lg ">{detail?.care_label}</p>
            ) : (
              ""
            )}
          </div>
          <div className=" grid grid-cols-3 gap-4">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/source-shoesmart-v1.0/thumb_EURO_HS-431C-GRE.GREY.2.png"
              width="100%"
              className="rounded-box"
            />
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/source-shoesmart-v1.0/thumb_EURO_HS-431C-GRE.GREY.2.png"
              width="100%"
              className="rounded-box"
            />
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/source-shoesmart-v1.0/thumb_EURO_HS-431C-GRE.GREY.2.png"
              width="100%"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
      <div className="p-10 bg-base-100 h-full rounded-box w-1/4 ml-5">
        <div className="title mb-5">
          <span className="text-2xl font-semibold">Tony Perroty Boots</span>
        </div>
        <div className="mb-10">
          <div className="mx-2 mb-1">
            <span className="text-lg">Size</span>
          </div>
          {detail?.variants === undefined
            ? ""
            : detail?.variants[0]?.sizes.map((el) => {
                return (
                  <button class="btn btn-outline mx-2 mb-1">{el.size}</button>
                );
              })}
        </div>
        <div className="mb-10">
          <div className=" mx-2 mb-1 my-3">
            {" "}
            <span className="text-lg">Color</span>
          </div>

          <button class="btn btn-active mx-2">Black</button>
          <button class="btn btn-outline mx-2">Blue</button>
        </div>
        <div className="mb-10  grid grid-cols-2  gap-2">
          <div className=" my-2  mx-2">
            <p className="text-lg">Quantity</p>
          </div>
          <div className="">
            <div class="form-control">
              <div class="relative  ">
                <button class="absolute top-0 left-0 rounded-full  btn btn-outline">
                  -
                </button>
                <input
                  type="text"
                  placeholder="1"
                  value={1}
                  className="w-full pr-16 input input-bordered text-center"
                />
                <button class="absolute top-0 right-0 rounded-full btn btn-outline">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 mx-2">
          <div className=" mb-1 my-3">
            {" "}
            <span className="text-lg">Price</span>
          </div>
          <div className="title">
            <span className="text-2xl font-semibold">Rp. {+detail?.price}</span>
          </div>
        </div>
        <div className="mb-10 mx-2">
          <button class="btn btn-outline">Add to cart</button>
          <button class="btn btn-active mx-2 text-2xl">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
