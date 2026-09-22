import React, { useContext, useEffect, useState } from "react";
import { Search, ChevronDown, Star } from "lucide-react";
import { MyStore } from "../Context/MyStore";
import ProductCard from "./ProductCard";
import { useParams, useSearchParams } from "react-router";

const Shop = () => {
  const {apiData} = useContext(MyStore)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [featured, setFeatured] = useState("")
  let filteredData = apiData.filter((product)=>{
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  }).sort((pro1,pro2)=>{
    if(featured === 'top'){
      return pro2.price - pro1.price
    }
    if (featured === "bottom") {
      return pro1.price - pro2.price;
    }
    if (featured === "rtop") {
      return pro2.rating - pro1.rating;
    }
    if (featured === "rbottom") {
      return pro1.rating - pro2.rating;
    }
    
  })
  const [searchParams] = useSearchParams() ;
  const categoryFromURL = searchParams.get("category") || "";
  const featuredFromURL = searchParams.get("featured") || "";
  useEffect(()=>{
    setCategory(categoryFromURL)
    setFeatured(featuredFromURL)
  },[])
  
  return (
    <div className="mt-14 min-h-screen bg-[#080909] px-6 py-10 text-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">All Products</h1>

        <p className="mt-2 text-sm text-zinc-500">{apiData.length} products found</p>
      </div>

      {/* Search + Filters */}
      <div className="mx-auto mt-8 flex max-w-7xl gap-3 rounded-2xl border border-white/10 p-4">
        {/* Search */}
        <div className="flex h-12 flex-1 items-center rounded-xl border border-white/5 bg-white/[0.02] px-4">
          <Search size={18} className="text-zinc-600" />

          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
          />
        </div>

        {/* Category */}
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="flex h-12 w-40 items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 text-sm"
          name=""
          id=""
        >
          <option default value="">
            All Categories
          </option>
          <option value="beauty">Beauty</option>
          <option value="mens-watches">Mens-watches</option>
          <option value="Furniture">Furniture</option>
          <option value="kitchen-accessories">Kitchen-accessories</option>
          <option value="Groceries">Groceries</option>
          <option value="laptops">Laptops</option>
          <option value="mens-shirts">Mens-shirts</option>
          <option value="fragrances">Fragrances</option>
          <option value="home-decoration">Home-decoration</option>
          <option value="mens-shoes">Mens-shoes</option>
          <option value="mobile-accessories">Mobile-accessories</option>
        </select>

        {/* Sort */}
        <select
          onChange={(e) => {
            setFeatured(e.target.value);
          }}
          className="flex h-12 w-40 items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 text-sm"
          name=""
          id=""
        >
          <option value="">Featured</option>
          <option value="top">Price:Low to High</option>
          <option value="bottom">Price:High to Low</option>
          <option value="rtop">Top Rated</option>
          <option value="rbottom">Lowest Rated</option>
        </select>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((elem) => (
          <ProductCard key={elem.id} product={elem} />
        ))}
      </div>
    </div>
  );
};

export default Shop;