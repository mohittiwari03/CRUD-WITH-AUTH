import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function CreatePost() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/posts", form);

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="flex min-h-[calc(100vh-68px)] items-center justify-center bg-slate-950 px-4 py-6 sm:px-6">
        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/20 sm:p-8">
          <h1 className="text-2xl font-semibold text-slate-100">
            Create a post
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Share something interesting with your audience.
          </p>

          <form className="mt-6 flex flex-col gap-3" onSubmit={submit}>
            <input
              placeholder="Title"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />

            <textarea
              placeholder="Description"
              className="min-h-30 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />

            <button className="w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
