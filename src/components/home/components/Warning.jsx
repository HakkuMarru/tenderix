import { useEffect, useState } from "react";

export default function Links() {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-10 px-[60px] md:px-[100px] xl:px-[250px]">
      <h2 className="font-inter text-white font-semibold text-2xl align-center text-center">
        Upozornění
      </h2>
      <div className="glass-box p-5 text-white text-md">
        Jakékoli výstupy z modelu Tenderix nelze chápat jako poskytování
        odborných informací nebo rad ve smyslu ust. § 2950 zákona č. 89/2012
        Sb., občanského zákoníku, ve znění pozdějších předpisů, a rovněž ani
        jako poskytování právních služeb ve smyslu ust. § 1 odst. 2 zákona č.
        85/1996 Sb., o advokacii, ve znění pozdějších předpisů. Charakter
        výstupů z aplikace Tenderix má posloužit k přiblížení a zpřehlednění
        právní úpravy veřejných zakázek, nikoliv jako profesionální právní návod
        k jejímu užití. Všechny právní i neprávní závěry učiněné na základě
        modelu Tenderix je nezbytné konzultovat s odborníky. Autoři a vlastníci
        modelu Tenderix neodpovídají za škody, ztráty a nebezpeční, ať už osobní
        nebo jiné, ke kterým došlo přímo nebo nepřímo jako následek používání
        jakýchkoli výstupů z modelu Tenderix.
      </div>
    </div>
  );
}
