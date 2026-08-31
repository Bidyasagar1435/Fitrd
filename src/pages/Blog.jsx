import React, { useState } from "react";
import { Flame, Clock, ArrowRight, BookOpen, Sparkles, Mail, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BLOG_DATA } from "../lib/data";
import Header from "../components/Header";

// Decorative gradient divider
const GradientDivider = () => (
  <div className="flex items-center justify-center gap-3 my-10">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60 rounded-full" />
    <div className="w-2 h-2 rounded-full bg-blue-500/60" />
    <div className="h-px w-24 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full" />
    <div className="w-2 h-2 rounded-full bg-purple-500/60" />
    <div className="h-px w-16 bg-gradient-to-r from-purple-500/60 to-transparent rounded-full" />
  </div>
);

// Featured blog card (large hero style)
const FeaturedCard = ({ post }) => (
  <div className="relative group w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 cursor-pointer">
    <div
      className={`relative w-full h-52 sm:h-64 md:h-80 bg-gradient-to-br ${post.coverGradient} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute top-8 left-12 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700" />
      <div className="absolute bottom-8 right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
      <span className="relative text-7xl sm:text-8xl drop-shadow-2xl select-none z-10 group-hover:scale-110 transition-transform duration-500">
        {post.coverEmoji}
      </span>
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg shadow-cyan-500/30">
          <Sparkles size={11} />
          Featured
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20 flex gap-1.5 flex-wrap justify-end">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold bg-white/10 border border-white/20 text-slate-300 px-2.5 py-1 rounded-full backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 sm:p-8">
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-3 py-1 rounded-full mb-4 ${post.categoryBg}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${post.categoryColor}`} />
        {post.category}
      </span>

      <h2 className="text-white font-black text-xl sm:text-2xl md:text-3xl leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-500">
        {post.title}
      </h2>

      <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.authorGradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
          >
            {post.authorInitial}
          </div>
          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <p className="text-slate-500 text-xs">{post.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Clock size={13} />
            {post.readTime}
          </span>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors duration-300 group/btn">
            Read Article
            <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Regular blog card
const BlogCard = ({ post }) => (
  <div className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
    <div
      className={`relative w-full h-40 bg-gradient-to-br ${post.coverGradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500" />
      <div className="absolute bottom-2 right-4 w-16 h-16 bg-purple-500/15 rounded-full blur-xl group-hover:bg-purple-500/25 transition-all duration-500" />
      <span className="relative text-5xl drop-shadow-xl select-none z-10 group-hover:scale-110 transition-transform duration-300">
        {post.coverEmoji}
      </span>
    </div>

    <div className="flex flex-col flex-1 p-5">
      <span
        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold border px-2.5 py-1 rounded-full mb-3 self-start ${post.categoryBg}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${post.categoryColor}`} />
        {post.category}
      </span>

      <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
        {post.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="h-px w-full bg-white/10 mb-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.authorGradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
          >
            {post.authorInitial}
          </div>
          <div>
            <p className="text-slate-300 text-xs font-medium">{post.author}</p>
            <p className="text-slate-600 text-[10px]">{post.date}</p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-slate-500 text-xs">
          <Clock size={11} />
          {post.readTime}
        </span>
      </div>
    </div>

    <div className="px-5 pb-4">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Read More
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  </div>
);

// Newsletter CTA
const NewsletterCTA = () => (
  <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/20 p-8 sm:p-12 text-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl pointer-events-none" />
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
        <Mail size={12} />
        Weekly Digest
      </div>
      <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
        Get Fitness Tips{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
          Delivered Weekly
        </span>
      </h3>
      <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
        Join 10,000+ members getting evidence-based fitness tips, nutrition guides, and FITRD updates every Sunday.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-cyan-500/50 transition-all duration-300"
        />
        <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 whitespace-nowrap">
          Subscribe Free
        </button>
      </div>
      <p className="text-slate-600 text-xs mt-3">No spam, ever. Unsubscribe anytime.</p>
    </div>
  </div>
);

const ALL_CATEGORIES = ["All", "Workout Tips", "Nutrition", "Mindset", "AI & Tech", "Transformation", "Success Stories"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const featuredPost = BLOG_DATA.find((p) => p.featured);
  const filteredPosts = BLOG_DATA.filter((p) => {
    if (activeCategory === "All") return !p.featured;
    return !p.featured && p.category === activeCategory;
  });

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Back button — fixed top-left */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-4 sm:left-6 z-50 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md px-3 py-2 rounded-full transition-all duration-300 group shadow-lg shadow-black/20"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
        Back
      </button>

      {/* Hero Section */}
      <section className="pt-28 pb-8 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 mt-8 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5  rounded-full bg-cyan-400 animate-pulse" />
            FITRD Blog
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-normal mb-4">
            Insights &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Expertise
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Evidence-based fitness knowledge, nutrition science, and transformation stories
            — written by coaches and backed by AI.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 sm:gap-10 mt-6 mb-2 flex-wrap">
          {[
            { icon: <BookOpen size={14} className="text-purple-500"/>, label: "7 Articles" },
            { icon: <Flame size={14} className="text-red-400" />, label: "Weekly Updates" },
            { icon: <Sparkles size={14} className="text-cyan-400" />, label: "AI-Curated" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 border border-white/10 backdrop-blur-sm rounded-lg p-2 text-slate-500 text-xs font-medium">
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Featured Post */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-md shadow-md shadow-gray-600/40">
            <div className="p-1.5 border border-white/10 rounded-full bg-white/5">
              <Flame size={16} className="text-red-500" />
            </div>
            <span className="font-semibold text-sm">Featured Post</span>
          </div>
        </div>
        {featuredPost && <FeaturedCard post={featuredPost} />}
      </section>

      {/* Popular Blogs */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-md shadow-md shadow-gray-600/40">
            <div className="p-1.5 border border-white/10 rounded-full bg-white/5">
              <Flame size={16} className="text-red-500" />
            </div>
            <span className="font-semibold text-sm">Popular Blogs</span>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 border-transparent text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
            <BookOpen size={40} className="mb-4 opacity-40" />
            <p className="text-sm">No posts in this category yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto mb-20">
        <NewsletterCTA />
      </section>
    </div>
  );
};

export default Blog;
