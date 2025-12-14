"use client";

import { useState,useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import FileUploader from "@/components/FileUploader";
import PasswordInput from "@/components/PasswordInput";
import ActionButton from "@/components/ActionButton";
import ResultSuccess from "@/components/ResultSuccess";
import ErrorMessage from "@/components/ErrorMessage";
import { decryptFile } from "@/utils/crypto";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Page() {
  const pathname = usePathname();
   useEffect(() => {
    // reset semua state saat pindah halaman
    setFile(null);
    setPassword("");
    setStatus("idle");
    setResult(null);
    setError("");
  }, [pathname]);
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const processFile = async () => {
    if (!file || !password) {
      setError("File dan password wajib diisi");
      setStatus("error");
      return;
    }

    setStatus("processing");

    try {
      const { blob, filename } = await decryptFile(file, password);

      const url = URL.createObjectURL(blob);

      setResult({
        url,
        filename,
      });

      setStatus("success");
    } catch (err) {
      console.error(err);
      setError("Password salah atau file rusak");
      setStatus("error");
    }
  };

  const reset = () => {
    setFile(null);
    setPassword("");
    setStatus("idle");
    setResult(null);
    setError("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-slate-900 rounded-2xl p-8">
          <div className="flex justify-center items-center text-xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">
                Dekripsi File Anda
            </span>
          </div>
          <FileUploader
            file={file}
            inputRef={inputRef}
            onChange={(e) => setFile(e.target.files[0])}
            onReset={reset}
            accept=".encrypted"
          />

          <PasswordInput password={password} setPassword={setPassword} />

          {status !== "success" && (
            <ActionButton
              mode="decrypt"
              status={status}
              onClick={processFile}
              disabled={!file || !password || status === "processing"}
            />
          )}

          {status === "error" && <ErrorMessage message={error} />}
          {status === "success" && (
            <ResultSuccess
              mode="decrypt"
              result={result}
              onReset={reset}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
