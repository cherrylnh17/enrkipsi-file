import { Key, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({ password, setPassword }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-8">
      <label className="text-xs text-slate-400 uppercase mb-2 block">
        Password
      </label>

      <div className="relative">
        <Key className="absolute left-4 top-4 w-4 h-4 text-slate-500" />

        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password..."
          className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-12 py-3 text-white focus:ring-emerald-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-300"
        >
          {show ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
