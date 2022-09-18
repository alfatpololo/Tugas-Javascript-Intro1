const check = (val) => {
  return Number.isInteger(val);
};

const range = (subject) => {
  if (subject > 100 || subject < 0) {
    return false;
  }
  return true;
};

const grading = (bahasa, bing, mtk, ipa) => {
  if (!bahasa || !bing || !mtk || !ipa) {
    return console.log("Isi nilai");
  }

  if (!check(bahasa) || !check(bing) || !check(mtk) || !check(ipa)) {
    return console.log("Angka harus number!");
  }

  if (!range(bahasa) || !range(bing) || !range(mtk) || !range(ipa)) {
    return console.log("Nilai harus berkisar antara 0 - 100");
  }

  const mean = (bahasa + bing + mtk + ipa) / 4;
  const grade =
    mean >= 90
      ? "A"
      : mean >= 80
      ? "B"
      : mean >= 70
      ? "C"
      : mean >= 60
      ? "D"
      : "E";
  console.log(`Rata-rata : ${mean}
Grade     : ${grade}`);
};

const nilaiBIndonesia = 60;
const nilaiBinggris = 50;
const nilaiMTK = 40;
const nilaiIPA = 40;

grading(nilaiBIndonesia, nilaiBinggris, nilaiMTK, nilaiIPA);