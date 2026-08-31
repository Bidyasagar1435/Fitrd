import { Flame } from "lucide-react";
import React from "react";

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <h1 className="text-center text-4xl font-bold pt-20">Blog</h1>
      <p className="text-center text-slate-400 text-lg">
        Stay updated with the latest fitness trends and tips.
      </p>
      <div className="inline-flex items-center justify-center w-full">
        <div className="inline-flex items-center justify-center mx-auto mt-4 px-6 py-2 border border-white/10 bg-white/5 rounded-md shadow-md shadow-gray-600/40">
          <div className="p-2 border border-white/10 rounded-full bg-white/5">
            <Flame size={30} className="text-red-500" />
          </div>
          <span className="ml-2 font-medium">Popular Blogs</span>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Blog;
