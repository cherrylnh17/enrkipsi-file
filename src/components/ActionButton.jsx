import { Lock, Unlock, RefreshCw } from "lucide-react";

const ActionButton = ({
  status,
  onClick,
  disabled,
  mode = "encrypt", // "encrypt" atau "decrypt"
}) => {
  const isProcessing = status === "processing";

  const config = {
    encrypt: {
      idleText: "ENKRIPSI FILE",
      loadingText: "MENGENKRIPSI...",
      icon: <Lock className="w-4 h-4 mr-2" />,
      color: "bg-emerald-500 hover:bg-emerald-400",
    },
    decrypt: {
      idleText: "DEKRIPSI FILE",
      loadingText: "MENDEKRIPSI...",
      icon: <Unlock className="w-4 h-4 mr-2" />,
      color: "bg-sky-500 hover:bg-sky-400",
    },
  };

  const { idleText, loadingText, icon, color } = config[mode];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-lg font-bold flex justify-center items-center transition
        ${
          isProcessing
            ? "bg-slate-700 text-slate-400 cursor-not-allowed"
            : `${color} text-white`
        }`}
    >
      {isProcessing ? (
        <>
          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          {icon}
          {idleText}
        </>
      )}
    </button>
  );
};

export default ActionButton;
