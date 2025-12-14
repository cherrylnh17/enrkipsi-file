import { Upload, FileText, X } from "lucide-react";

const FileUploader = ({ file, inputRef, onChange, onReset }) => {
  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 mb-6 text-center cursor-pointer ${
        file
          ? "border-emerald-500/50 bg-emerald-500/5"
          : "border-slate-700 hover:border-slate-500"
      }`}
      onClick={() => !file && inputRef.current.click()}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={onChange}
        className="hidden"
      />

      {file ? (
        <>
          <FileText className="w-10 h-10 mx-auto text-emerald-400 mb-2" />
          <p className="text-white font-medium truncate">{file.name}</p>
          <p className="text-xs text-slate-500">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onReset();
            }}
            className="mt-3 text-xs text-red-400 flex items-center justify-center mx-auto"
          >
            <X className="w-3 h-3 mr-1" /> Ganti File
          </button>
        </>
      ) : (
        <>
          <Upload className="w-10 h-10 mx-auto text-slate-600 mb-2" />
          <p className="text-slate-300 font-medium">
            Klik atau drag file ke sini
          </p>
        </>
      )}
    </div>
  );
};

export default FileUploader;
