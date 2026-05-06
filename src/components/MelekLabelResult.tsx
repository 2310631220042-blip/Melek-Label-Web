import React from "react";
import { ArrowLeft, MoreVertical, Candy, Droplet, Beef } from "lucide-react";

/* ================= TYPES ================= */
type GGLStatus = "Tinggi" | "Sedang" | "Rendah";

interface NutrientData {
  label: string;
  value: number;
  unit: string;
  status: GGLStatus;
  icon: React.ReactNode;
}

/* ================= HELPERS ================= */
const calculateStatus = (val: number, limit: number): GGLStatus => {
  if (val > limit) return "Tinggi";
  if (val > limit * 0.5) return "Sedang";
  return "Rendah";
};

const getStatusStyle = (status: GGLStatus) => {
  switch (status) {
    case "Tinggi": return "bg-red-100 text-red-600";
    case "Sedang": return "bg-yellow-100 text-yellow-700";
    case "Rendah": return "bg-green-100 text-green-600";
    default: return "";
  }
};

const getIndicatorColor = (status: GGLStatus) => {
  switch (status) {
    case "Tinggi": return "bg-red-500";
    case "Sedang": return "bg-yellow-400";
    case "Rendah": return "bg-green-500";
    default: return "";
  }
};

/* ================= COMPONENT ================= */
interface Props {
  productName?: string;
  category?: string;
  gula?: number;
  garam?: number;
  lemak?: number;
}

const MelekLabelResult: React.FC<Props> = ({
  productName = "Hasil Analisis",
  category = "Produk Pilihan",
  gula = 0,
  garam = 0,
  lemak = 0,
}) => {
  // Data dengan logika hitung otomatis
  const data: NutrientData[] = [
    { label: "Gula", value: gula, unit: "g", status: calculateStatus(gula, 50), icon: <Candy size={22} /> },
    { label: "Garam", value: garam, unit: "mg", status: calculateStatus(garam, 2000), icon: <Droplet size={22} /> },
    { label: "Lemak", value: lemak, unit: "g", status: calculateStatus(lemak, 67), icon: <Beef size={22} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <button onClick={() => window.history.back()} className="text-gray-700"><ArrowLeft size={22} /></button>
        <h1 className="font-semibold text-gray-800 text-sm">{productName}</h1>
        <MoreVertical size={22} />
      </header>

      <main className="flex-grow bg-teal-50 px-4 py-6 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">Hasil Analisis Label Kamu:</h2>
        <p className="text-sm text-gray-500 mb-6">Kategori: {category}</p>
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <div className="mb-2 text-gray-700">{item.icon}</div>
                <p className="font-semibold text-gray-800">{item.value} {item.unit}</p>
                <div className={`w-6 h-2 rounded-full mt-2 ${getIndicatorColor(item.status)}`} />
                <span className={`mt-2 text-xs px-2 py-1 rounded-full ${getStatusStyle(item.status)}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MelekLabelResult;