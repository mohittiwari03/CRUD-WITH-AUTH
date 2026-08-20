import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../api/axios";
import PostCard from "../components/PostCard";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const [userPosts, setUserPosts] = useState([]);

  const fetchMyPosts = async (id) => {
    const res = await api.get("posts/my-posts");
    setUserPosts(res.data.data);
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/20 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-100">
                Welcome {user?.name}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Your account dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-0 py-6 sm:px-0 lg:px-0">
            {userPosts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/80 px-4 py-6 text-center text-slate-400 shadow-lg shadow-black/20">
                No posts yet. Create one to get started.
              </div>
            ) : (
              userPosts.map((post) => <PostCard key={post._id} post={post} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
