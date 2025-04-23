fetch('data/materi.json')
  .then(response => response.json())
  .then(data => {
    // Tampilkan Materi
    const materiDiv = document.getElementById('materi');
    data.materi.forEach(m => {
      materiDiv.innerHTML += `<h3>${m.judul}</h3><p>${m.isi}</p>`;
    });

    // Tampilkan Soal
    const soalDiv = document.getElementById('soal');
    data.soal.forEach((s, i) => {
      soalDiv.innerHTML += `
        <div>
          <p>${i + 1}. ${s.pertanyaan}</p>
          ${s.opsi.map(o => `<button onclick="cekJawaban('${o}', '${s.jawaban}', this)">${o}</button>`).join('')}
        </div><br/>
      `;
    });
  });

function cekJawaban(pilihan, jawaban, btn) {
  if (pilihan === jawaban) {
    btn.style.backgroundColor = 'green';
  } else {
    btn.style.backgroundColor = 'red';
  }
}
