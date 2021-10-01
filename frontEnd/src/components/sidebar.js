function Sidebar() {
  return (
    <div className="w-1/6">
      <ul className="menu py-3 px-12">
        <li className="text-lg font-bold">
          <span>Product</span>
        </li>
        <li className="text-md font-bold">
          <a>All</a>
        </li>
        <li>
          <a>Men</a>
        </li>
        <li>
          <a>Women</a>
        </li>
        <li>
          <a>Kids</a>
        </li>
      </ul>
      <ul className="menu py-1 bg-base-100 px-12">
        <li className="text-lg font-bold">
          <span>Category</span>
        </li>
        <li className="text-md font-bold">
          <a>All</a>
        </li>
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
        <li>
          <a>Sandals</a>
        </li>
        <li>
          <a>School Shoes</a>
        </li>
        <li className="font-bold">
          <a>More...</a>
        </li>
      </ul>
      <ul className="menu py-1 bg-base-100 px-12">
        <li className="text-lg font-bold">
          <span>Information</span>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>

        <li>
          <a>Shiping</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
