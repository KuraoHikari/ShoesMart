import Detail from "../components/detail";
import user from "./../assets/user.png";
import Card from "../components/card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes, fetchShoesData } from "../store/action";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const server = useSelector((state) => ({
    state,
  }));
  console.log(server);

  useEffect(() => {
    dispatch(fetchShoes(5));
    dispatch(fetchShoesData(id));
  }, []);
  return (
    <>
      <Detail detail={server?.state?.fetch?.shoesDetail} />
      <div className="ml-10 mb-10 my-10 mr-10 flex">
        <div className="w-1/6 shadow-lg rounded-3xl  px-5 py-10 text-center bg-base-200">
          <div>
            {" "}
            <span className="text-9xl font-bold ">5.0</span>
            <span className="">/5</span>
          </div>
          <div className="my-2 text-yellow-300 text-2xl">
            <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>{" "}
            <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>{" "}
            <i class="bx bxs-star"></i>
          </div>

          <span className="text-md font-bold text-2xl">Sangat Baik</span>
        </div>
        <div className="w-5/6 shadow-lg rounded-3xl  px-10 py-1 bg-base-200">
          <div>
            {" "}
            <span className="text-2xl font-semibold ">
              What They think about this product?
            </span>
            <div className="flex ">
              <div className="w-1/6   px-5 py-10 text-center">
                <div className="justify-items-center">
                  <img src={user} width="50%" className="m-auto"></img>
                </div>
                <div className="my-2 text-yellow-300 pt-2">
                  <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>{" "}
                  <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>{" "}
                  <i class="bx bxs-star"></i>
                </div>
              </div>
              <div className="w-5/6 px-5 py-5">
                <div className="bg-blue-100 h-full p-10 rounded-3xl">
                  <span className="text-md absolute right-20 p-3 z-50 opacity-50">
                    Tuesday, 20 June 2019
                  </span>
                  <p className="text-xl font-semibold mb-5">
                    Rosalia, Ibu rumah tangga
                  </p>
                  <p className="text-lg  ">
                    Tony Perotti Boots sangat cocok dipakai suami saya, bahannya
                    sangat bagus. Terimakasih Shoesmart!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <button class="btn">See More Review</button>
      </div>
      <div className="ml-10 mr-10 mb-10 my-10  flex ">
        <div className="shadow-lg rounded-3xl  px-10 py-5 bg-base-200 w-full">
          <div>
            {" "}
            <span className="text-2xl font-semibold ">More Product</span>
          </div>
          <div className="my-5 grid grid-cols-5 ">
            {" "}
            {server?.state?.fetch?.dataShoes.map((el) => {
              return <Card detail={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
