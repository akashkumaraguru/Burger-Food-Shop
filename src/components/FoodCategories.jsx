const FoodCategories = () => {
    return(
        <div className ='max-w-[1640px] mx-auto p-4 ' > 
            <h1 className=' font-bold text-5xl p-10 text-orange-500 text-center  '>Top Rated Menu Items</h1>
            <h1 className=' text-left text-3xl '>Filter Types</h1>
            <div className='p-5 flex gap-20'>
                <h1 className='border-2 w-[100px]  cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>Pizza</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>Burger</h1>
                <h1 className='border-2 w-[100px]  cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>Chicken</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>fries</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>Lolipop</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>v-pizza</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>eggs</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>corns</h1>
                <h1 className='border-2 w-[100px] cursor-pointer  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-500  '>See more</h1>
            </div>
            <h1 className=' text-left text-3xl '>Filter Prices</h1>
            <div className='p-5 flex gap-20'>
                <h1 className='border-2 w-[100px] border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 '>$75-100</h1>
                <h1 className='border-2 w-[100px] border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 '>$100-150</h1>
                <h1 className='border-2 w-[100px]  border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 '>$150-200</h1>
                <h1 className='border-2 w-[100px] border-orange-400 rounded-full h-10 text-center flex items-center justify-evenly hover:bg-orange-400 '>$200-250</h1>
                
            </div>
            

        </div>
    );
};

export default FoodCategories;