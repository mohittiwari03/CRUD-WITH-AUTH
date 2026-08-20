import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);

      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur sm:px-6">
        <Link to="/" className="text-lg font-semibold text-slate-100">
          CRUD App
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Login
          </Link>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-68px)] items-center justify-center bg-slate-950 px-4 py-6 sm:px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/20 sm:p-8">
          <h1 className="text-2xl font-semibold text-slate-100">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Join the app and start creating posts.
          </p>

          <form className="mt-6 flex flex-col gap-3" onSubmit={submit}>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

            <button className="w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
