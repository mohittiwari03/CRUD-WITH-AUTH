import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur sm:px-6">
      <Link to="/" className="text-lg font-semibold text-slate-100">
        CRUD App
      </Link>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {user ? (
          <>
            <span className="text-sm text-slate-400">Hello, {user.name}</span>

            <Link
              to="/dashboard"
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Dashboard
            </Link>

            <Link
              to="/create"
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Create
            </Link>

            <button
              onClick={logout}
              className="rounded-full border border-blue-700 bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
