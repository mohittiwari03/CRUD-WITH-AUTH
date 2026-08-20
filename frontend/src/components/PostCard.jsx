import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PostCard({ post, onDelete }) {
  const { user } = useAuth();

  const isOwner = user?._id === post.user._id;

  return (
    <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-lg shadow-black/20">
      <h2 className="text-lg font-semibold text-slate-100">{post.title}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {post.description}
      </p>

      <small className="mt-3 block text-sm text-slate-500">
        By {post.user.name}
      </small>

      {isOwner && (
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to={`/edit/${post._id}`}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
          >
            Edit
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-full border border-red-700 bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-500"
            onClick={() => onDelete(post._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
