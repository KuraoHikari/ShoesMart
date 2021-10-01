import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/card";
import { fetchShoes } from "../store/action";
import bannerInfo from "./../assets/1.png";
import bannerDisc from "./../assets/2.png";
import bannerNewComming from "./../assets/bannerNewComing.png";
function Home() {
  const dispatch = useDispatch();
  const server = useSelector((state) => ({
    state,
  }));
  useEffect(() => {
    dispatch(fetchShoes(10));
  }, []);

  return (
    <div className="w-5/6 my-9 pr-10">
      <div className="flex justify-between">
        <div>
          <img src={bannerInfo} width="98%" className="shadow-lg rounded-3xl" />
        </div>
        <div>
          <img src={bannerDisc} width="98%" className="shadow-lg rounded-3xl" />
        </div>
      </div>
      <div className="my-5 grid grid-cols-5 ">
        {server?.state?.fetch?.dataShoes.map((el) => {
          return <Card detail={el} key={el.id} />;
        })}
      </div>
      <div>
        <img src={bannerNewComming} className="shadow-lg rounded-3xl"></img>
      </div>
      <div className="my-5 grid grid-cols-5">{/* <Card /> */}</div>
    </div>
  );
}

export default Home;
