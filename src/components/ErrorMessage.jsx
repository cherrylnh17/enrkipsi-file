import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex">
      <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
      <p className="text-red-400 text-sm">{message}</p>
    </div>
  );
};

export default ErrorMessage;
