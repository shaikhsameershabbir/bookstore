const Cards = (items) => {
  let item = items.item;
  //   console.log("Thsi is [rasjdfh", item);
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl my-3">
          <figure>
            <img src={`${item.image}`} alt="BookImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary"> {item.category}</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline hover:bg-pink-500  hover:text-white hover:p-2 cursor-pointer">
                $ {item.price}
              </div>
              <div className="badge badge-outline  hover:bg-pink-500 hover:text-white  hover:p-2 cursor-pointer">
                Buy Now{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
