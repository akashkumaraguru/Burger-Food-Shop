const FoodCategories = () => {
    return(
        <div className ='max-w-[1640px] mx-auto p-4 ' > 
            <h1 className=' font-bold text-5xl p-10 text-orange-500 text-center  '>Top Rated Menu Items</h1>
            <h1 className=' text-left text-3xl '>Filter Types</h1>
            <div className='p-5 flex gap-20'>
                <h1 className='border-2 w-[100px]  cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white '>Pizza</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>Burger</h1>
                <h1 className='border-2 w-[100px]  cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>Chicken</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>fries</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>Lolipop</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>v-pizza</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>eggs</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500 hover:text-white  '>corns</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  hover:text-white '>See more</h1>
            </div>
            <h1 className=' text-left text-3xl '>Filter Prices</h1>
            <div className='p-5 flex gap-20'>
                <h1 className='border-2 w-[100px] border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 hover:text-white cursor-pointer '>$75-100</h1>
                <h1 className='border-2 w-[100px] border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 hover:text-white cursor-pointer  '>$100-150</h1>
                <h1 className='border-2 w-[100px]  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 hover:text-white cursor-pointer '>$150-200</h1>
                <h1 className='border-2 w-[100px] border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 hover:text-white cursor-pointer '>$200-250</h1>
                
            </div>
            

        </div>
    );
};

export default FoodCategories;