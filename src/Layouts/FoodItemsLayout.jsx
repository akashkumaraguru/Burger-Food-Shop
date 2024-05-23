
const FoodItemsLayout = (props) => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className='w-[40vw] bg-gray-100  shadow-lg shadow-black-500/50 cursor-pointer hover:scale-105 duration-300  '>
        <img src={props.img}alt="pizza" className=' object-fit rounded-t-lg hover:opacity-70' />
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold p-3 '>{props.food}</h1>
          <h1 className =' text-3xl mr-10  border-2 bg-orange-400 text-white w-20 text-center rounded-lg '>{props.rate}</h1>
        </div>
      </div>
      
    </div>
  );
};

export default FoodItemsLayout;
