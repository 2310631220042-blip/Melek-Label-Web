import React from "react";

export default function MelekLabelHome() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* ================= HEADER ================= */}
      <header className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-800">
          👁️🏷️ Melek Label
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm">
          🙂
        </div>
      </header>

      {/* ================= HERO & INPUT ================= */}
      <main className="flex-grow bg-teal-50 flex flex-col items-center px-4 py-10">
        
        {/* Hero Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-teal-900 text-center">
          Halo, Selamat Datang di Melek Label!
        </h1>
        <p className="text-gray-600 mt-2 text-center">
          Yuk, Ketahui Apa yang Ada di Kemasanmu.
        </p>

        {/* Input Card */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg mt-8 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Masukan Jumlah GGL per Takaran Saji
          </h2>

          {/* Gula */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Gula (g)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="0"
                className="w-full border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <span className="bg-gray-100 px-3 flex items-center rounded-r-lg text-gray-600">
                g
              </span>
            </div>
          </div>

          {/* Garam */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Garam / Natrium (mg)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="0"
                className="w-full border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <span className="bg-gray-100 px-3 flex items-center rounded-r-lg text-gray-600">
                mg
              </span>
            </div>
          </div>

          {/* Lemak Jenuh */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Lemak Jenuh (g)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="0"
                className="w-full border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <span className="bg-gray-100 px-3 flex items-center rounded-r-lg text-gray-600">
                g
              </span>
            </div>
          </div>
        </div>

        {/* ================= BUTTON ================= */}
        <button className="w-full max-w-md mt-6 bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition">
          Cek Label Saya
        </button>

        <p className="text-xs text-gray-500 mt-2 text-center">
          *Lihat contoh label kemasan untuk bantuan.
        </p>

        {/* Scan Feature */}
        <button className="mt-3 flex items-center gap-2 text-teal-600 hover:underline">
          <span>📷</span>
          <span>Atau Scan Label dengan Kamera</span>
        </button>

        {/* ================= FITUR LAINNYA ================= */}
        <div className="w-full max-w-md mt-10">
          <hr className="mb-4" />
          <h3 className="text-center font-semibold text-gray-700 mb-4">
            Fitur Lainnya
          </h3>

          <div className="grid grid-cols-3 gap-3">
            
            <button className="bg-teal-100 rounded-xl p-4 flex flex-col items-center hover:bg-teal-200 transition">
              <span className="text-xl">📘</span>
              <span className="text-sm mt-1 text-gray-700">Edukasi GGL</span>
            </button>

            <button className="bg-teal-100 rounded-xl p-4 flex flex-col items-center hover:bg-teal-200 transition">
              <span className="text-xl">🔍</span>
              <span className="text-sm mt-1 text-gray-700">Cari Produk</span>
            </button>

            <button className="bg-teal-100 rounded-xl p-4 flex flex-col items-center hover:bg-teal-200 transition">
              <span className="text-xl">📊</span>
              <span className="text-sm mt-1 text-gray-700">Riwayat Saya</span>
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