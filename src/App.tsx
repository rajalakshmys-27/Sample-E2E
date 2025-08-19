import { useState } from "react";

interface FileInfo {
  name: string;
  type: string;
}

function App() {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === "application/pdf") {
      setFileInfo({ name: file.name, type: file.type });
      setError(null);
    } else {
      setFileInfo(null);
      setError("Only PDF files are allowed!");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6">PDF Verifier</h1>

        <label className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Upload File
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {fileInfo && (
          <div className="mt-6 p-4 border rounded-xl shadow bg-white">
            <p className="text-green-600 font-semibold">
              PDF Uploaded: {fileInfo.name}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 border rounded-xl shadow bg-white">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
