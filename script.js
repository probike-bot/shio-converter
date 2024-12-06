function convertToShio() {
  const year = parseInt(document.getElementById('year-input').value);

  if (isNaN(year) || year <= 0) {
    document.getElementById('result').textContent = 'Masukkan tahun yang valid!';
    return;
  }

  // Daftar Shio sesuai urutan siklus 12 tahun
  const shioList = [
    'Monyet 🐒',
    'Ayam 🐓',
    'Anjing 🐕',
    'Babi 🐖',
    'Tikus 🐀',
    'Kerbau 🐂',
    'Macan 🐅',
    'Kelinci 🐇',
    'Naga 🐉',
    'Ular 🐍',
    'Kuda 🐎',
    'Kambing 🐐'
  ];

  // Hitung Shio berdasarkan sisa pembagian dengan 12
  const shio = shioList[year % 12];

  // Tampilkan hasil
  document.getElementById('result').textContent = `Shio Anda: ${shio}`;
}
