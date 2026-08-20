import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await api.get("/posts");

    setPosts(res.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);

      fetchPosts();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/80 px-4 py-6 text-center text-slate-400 shadow-lg shadow-black/20">
              No posts yet. Create one to get started.
            </div>
          ) : (
            posts.map((post) => (
              <PostCard key={post._id} post={post} onDelete={deletePost} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
