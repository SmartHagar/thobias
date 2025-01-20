/** @format */

import React from "react";

interface Props {
  props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
  return (
    <>
      <div className="container">
        <div className={`benefit-block ${props}`}>
          <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-phone-call lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">
                Layanan Pelanggan 24/7
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                Kami siap membantu Anda dengan pertanyaan atau masalah kapan
                saja, 24/7.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-return lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">
                Garansi Uang Kembali 14 Hari
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                Jika Anda tidak puas dengan pembelian Anda, cukup kembalikan
                dalam waktu 14 hari untuk pengembalian dana.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-guarantee lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">Jaminan Kami</div>
              <div className="caption1 text-secondary text-center mt-3">
                Kami mendukung produk dan layanan kami serta menjamin kepuasan
                Anda.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-delivery-truck lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">Pengiriman Cepat</div>
              <div className="caption1 text-secondary text-center mt-3">
                Kami memastikan produk Anda tiba dengan cepat dan aman ke tujuan
                Anda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
