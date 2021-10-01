function Navbar() {
  return (
    <div className="navbar mb-4 shadow-lg bg-base-100 text-neutral">
      <div className="px-10 mx-2 navbar-start">
        <span className="text-xl font-bold">
          <i class="bx bxs-shopping-bag-alt"></i> Store
        </span>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch">
          <span className="text-2xl font-bold">SHOESMART</span>
        </div>
      </div>
      <div className="pr-10 navbar-end ">
        <button className="btn btn-ghost mr-5">Login</button>
        <button className="btn btn-active" role="button" aria-pressed="true">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
