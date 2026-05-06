import React from "react";
import {
  ArrowLeft,
  MoreVertical,
  Candy,
  Droplet,
  Beef,
} from "lucide-react";

export default function MelekLabelResult() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* ================= HEADER ================= */}
      <header className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <button className="text-gray-700">
          <ArrowLeft size={22} />
        </button>

        <h1 className="font-semibold text-gray-800">
          Biskuit Enak
        </h1>

        <button className="text-gray-700">
          <MoreVertical size={22} />
        </button>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-grow bg-teal-50 px-4 py-6 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          Hasil Analisis Label Kamu:
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          [Makanan Ringan]
        </p>

        {/* ================= CARD GGL ================= */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-5">
          <h3 className="font-semibold text-gray-800 mb-4 text-center">
            Kandungan Nutrisi per Takaran Saji
          </h3>

          <div className="grid grid-cols-3 gap-3">
            
            {/* GULA */}
            <div className="flex flex-col items-center text-center">
              <Candy className="text-red-500 mb-1" size={22} />
              <p className="text-xs text-gray-500">Gula</p>
              <p className="font-semibold text-gray-800">20 g</p>
              <span className="mt-1 text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                Tinggi
              </span>
            </div>

            {/* GARAM */}
            <div className="flex flex-col items-center text-center">
              <Droplet className="text-yellow-500 mb-1" size={22} />
              <p className="text-xs text-gray-500">Garam</p>
              <p className="font-semibold text-gray-800">300 mg</p>
              <span className="mt-1 text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                Sedang
              </span>
            </div>

            {/* LEMAK */}
            <div className="flex flex-col items-center text-center">
              <Beef className="text-green-500 mb-1" size={22} />
              <p className="text-xs text-gray-500">Lemak</p>
              <p className="font-semibold text-gray-800">5 g</p>
              <span className="mt-1 text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
                Rendah
              </span>
            </div>

          </div>
        </div>

        {/* ================= REKOMENDASI ================= */}
        <div className="w-full max-w-md mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Saran / Rekomendasi:
          </h3>

          <div className="bg-teal-100 rounded-xl p-4 text-sm text-gray-700 space-y-2">
            <p>• Produk ini memiliki kandungan gula yang tinggi.</p>
            <p>• Batasi konsumsi dan perbanyak minum air putih.</p>
            <p>• Coba cari alternatif yang lebih rendah gula.</p>
          </div>
        </div>

        {/* ================= BUTTON AKSI ================= */}
        <div className="w-full max-w-md mt-6 grid grid-cols-2 gap-3">
          
          <button className="bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition">
            Cari Alternatif
          </button>

          <button className="bg-white text-teal-600 border border-teal-600 py-3 rounded-xl font-semibold hover:bg-teal-50 transition">
            Simpan Hasil
          </button>

        </div>

        {/* ================= EDUKASI ================= */}
        <div className="w-full max-w-md mt-8">
          <hr className="mb-4" />

          <h3 className="text-center font-semibold text-gray-700 mb-4">
            Pelajari Lebih Lanjut tentang GGL
          </h3>

          <div className="grid grid-cols-3 gap-3">
            
            <button className="bg-teal-100 rounded-xl p-3 text-sm text-gray-700 hover:bg-teal-200 transition">
              Gula
            </button>

            <button className="bg-teal-100 rounded-xl p-3 text-sm text-gray-700 hover:bg-teal-200 transition">
              Garam
            </button>

            <button className="bg-teal-100 rounded-xl p-3 text-sm text-gray-700 hover:bg-teal-200 transition">
              Lemak Jenuh
            </button>

          </div>
        </div>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white text-center py-4 text-xs text-gray-500">
        (c) 2023 Melek Label. Semua Hak Dilindungi.
      </footer>

    </div>
  );
}