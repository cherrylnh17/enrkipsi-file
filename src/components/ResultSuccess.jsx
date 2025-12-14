import { Download, CheckCircle, Unlock } from "lucide-react";

const ResultSuccess = ({
  result,
  onReset,
  mode = "encrypt", // "encrypt" atau "decrypt"
}) => {
  const config = {
    encrypt: {
      title: "Enkripsi Berhasil",
      resetText: "Enkripsi file lain",
      color: "text-emerald-500",
      button: "bg-emerald-500 hover:bg-emerald-400",
      icon: <CheckCircle className="w-10 h-10 mx-auto mb-2 text-emerald-500" />,
    },
    decrypt: {
      title: "Dekripsi Berhasil",
      resetText: "Dekripsi file lain",
      color: "text-sky-500",
      button: "bg-sky-500 hover:bg-sky-400",
      icon: <Unlock className="w-10 h-10 mx-auto mb-2 text-sky-500" />,
    },
  };

  const { title, resetText, button, icon } = config[mode];

  return (
    <div className="mt-6 text-center">
      {icon}
      <h3 className="font-bold text-white mb-2">{title}</h3>

      <a
        href={result.url}
        download={result.filename}
        className={`block w-full py-3 rounded-lg mb-3 text-white transition ${button}`}
      >
        <Download className="inline w-4 h-4 mr-2" />
        Download File
      </a>

      <button
        onClick={onReset}
        className="text-xs text-slate-400 underline"
      >
        {resetText}
      </button>
    </div>
  );
};

export default ResultSuccess;
