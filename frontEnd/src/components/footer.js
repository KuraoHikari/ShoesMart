function Footer() {
  return (
    <div className="w-full  grid grid-cols-3 bg-blue-100  gap-4">
      <div className=" pl-36 py-20 ">
        <h2 className="font-extrabold text-2xl mb-5">SHOESMART</h2>
        <p className="text-lg">
          Marketplace sepatu online untuk wnita dan pria yang didirikan pada
          2016.Kami hadir sebagai jawaban atas tantangan dunia teknologi yang
          semakin maju, termasuk dalam berbelanja online.
        </p>
      </div>
      <div className=" pl-36 py-20 ">
        <h2 className=" text-2xl mb-5 font-semibold">Category</h2>
        <div className="  grid grid-cols-2  gap-40">
          <ul className="text-lg">
            <li>
              <a>Boots</a>
            </li>
            <li>
              <a>Flats</a>
            </li>
            <li>
              <a>Heels</a>
            </li>
            <li>
              <a>Loafers</a>
            </li>
            <li>
              <a>Pantofels</a>
            </li>
          </ul>
          <ul className="text-lg">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Shiping</a>
            </li>
            <li>
              <a>Return Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-20 pr-10">
        <h2 className="font-extrabold text-6xl mb-5">
          <span className="pl-5">
            <i class="bx bxl-twitter"></i>
          </span>
          <span className="pl-5">
            <i class="bx bxl-youtube"></i>
          </span>
          <span className="pl-5">
            <i class="bx bxl-facebook-circle"></i>
          </span>
          <span className="pl-5">
            <i class="bx bxs-phone"></i>
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
