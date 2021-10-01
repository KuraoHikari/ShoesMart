function Searchbar() {
  return (
    <div className="mb-4 flex text-neutral justify-between">
      <div className="px-10 mx-2">
        <button className="btn btn-active" role="button" aria-pressed="true">
          All BRANDS
        </button>
        <button class="btn bg-base-100 shadow-md text-base-300 border-none mx-3">
          Avali
        </button>
        <button class="btn bg-base-100 shadow-md text-base-300 border-none mx-3">
          Zetta
        </button>
        <button class="btn bg-base-100 shadow-md text-base-300 border-none mx-3">
          Barefoot
        </button>
        <button class="btn bg-base-100 shadow-md text-base-300 border-none mx-3">
          Perindu
        </button>
        <button class="btn bg-base-100 shadow-md text-base-300 border-none mx-3">
          Shoelovin
        </button>
        <button class="btn bg-base-100 shadow-md text-base-300 border-none mx-3">
          Misleto
        </button>
        <button class="btn btn-ghost mx-3">More Brands {">"}</button>
      </div>
      <div className="pr-10 w-4/12">
        <div class="form-control">
          <div class="relative ">
            <input
              type="text"
              placeholder="Search your favorites shoes ..."
              class="w-full pr-30 input input input-bordered "
            />
            <button class="absolute top-0 right-0 rounded-l-none btn btn-neutral">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
