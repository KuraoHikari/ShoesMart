import { useHistory } from "react-router-dom";
function Card({ detail }) {
  const history = useHistory();
  function shoesDetailGo() {
    history.push(`/product/${detail.id}`);
  }
  return (
    <div class="card my-2 mx-2 shadow-md ">
      <button className="text-4xl absolute right-0 p-3 z-50">
        <i class="bx bx-heart"></i>
      </button>

      <div className="hover:opacity-60" onClick={() => shoesDetailGo()}>
        <figure>
          <img src="https://s3.ap-southeast-1.amazonaws.com/source-shoesmart-v1.0/thumb_EURO_HS-431C-GRE.GREY.2.png" />
        </figure>
        <div className="px-2 m-3 ">
          <p>{detail?.name}</p>
          <h2 className="text-xl font-bold">Rp. {+detail.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
