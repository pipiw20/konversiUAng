const nilaiTukar = {
  USD: { USD: 1, EUR: 0.85, GBP: 0.73, JPY: 110.0, IDR: 16300.0, MYR: 4.41 },
  EUR: { USD: 1.08, EUR: 1, GBP: 0.84, JPY: 160.42, IDR: 17654.0, MYR: 4.79 },
  GBP: { USD: 1.29, EUR: 1.19, GBP: 1, JPY: 191.17, IDR: 21054.1, MYR: 5.7 },
  JPY: { USD: 0.0068,EUR: 0.0062,GBP: 0.0067,JPY: 1,IDR: 103.36,MYR: 0.03,},
  IDR: {USD: 0.00006,EUR: 0.00005681,GBP: 0.00005,JPY: 0.00909,IDR: 1,MYR: 0.00027,},
  MYR: { USD: 0.23, EUR: 0.21, GBP: 0.18, JPY: 34.0, IDR: 3.692, MYR: 1 },
};

function konversiMataUang() {
  const jumlah = document.getElementById("amount").value;
  const dariMataUang = document.getElementById("fromCurrency").value;
  const keMataUang = document.getElementById("toCurrency").value;

  if (jumlah<0){
    alert("Jumlah harus >= 0");
    return false;
  }
  const nilai = nilaiTukar[dariMataUang][keMataUang];
  const jumlahYangDikonversi = jumlah * nilai;


document.getElementById("result").innerText = 
  `${Number(jumlah).toLocaleString('id-ID', {
    style: 'currency', currency: dariMataUang
  })} = ${jumlahYangDikonversi.toLocaleString('id-ID', {
    style: 'currency', currency: keMataUang
  })}`;

  return false; 
}
