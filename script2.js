document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector(".search_box input[type='text']");
  const resultsList = document.getElementById("results");

  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      const searchResults = [];

      // Sitenizde aramak istediğiniz içerikleri ekleyin ve her bir sonucun bağlantısını belirtin
      const siteContent = [
          { text: "Wikipedia AZ", link: "https://az.wikipedia.org/wiki/Torpaqşünaslıq" },
          { text: "Wikipedia TR", link: "https://tr.wikipedia.org/wiki/Toprak_bilimi" },
          { text: "Wikipedia EN", link: "https://en.wikipedia.org/wiki/soil_science" },
          { text: "Internet Archive EN", link: "https://archive.org/search?query=Torpaqşünaslıq&sin=TXT" },
          { text: "PDF e-derslik.edu AZ", link: "https://www.e-derslik.edu.az/noduploads/vet_pdf/torpaqsunasliq.pdf" },
          { text: "PDF gsaz.az AZ", link: "https://gsaz.az/ci/Kitabxana/mammadov%20-%20torpaqshunasligin%20esaslari.pdf" },
          { text: "PDF ankara.edu TR", link: "https://acikders.ankara.edu.tr/course/view.php?id=180" },
          { text: "Wikipedia TəbiətElmləri AZ", link: "https://az.wikipedia.org/wiki/Təbiət_elmləri" },
          { text: "Wikipedia Torpaq AZ", link: "https://az.wikipedia.org/wiki/Torpaq" },
          { text: "Toprağın Tanımı ve Özellikleri", link: "https://onurcatalkaya.github.io/site/Bolum1/index3.html" },
          { text: "Toprak Oluşumu ve Süreçleri", link: "https://onurcatalkaya.github.io/site/Bolum2/index4.html" },
          { text: "Toprak Profili ve Tabakaları", link: "https://onurcatalkaya.github.io/site/Bolum3/index5.html" },
          { text: "Toprağın Bileşenleri", link: "https://onurcatalkaya.github.io/site/Bolum4/index6.html" },
          { text: "Toprağın Renk ve Yapı Özellikleri", link: "https://onurcatalkaya.github.io/site/Bolum5/index7.html" },
          { text: "Toprağın Verimliliği ve Besin Değerleri", link: "https://onurcatalkaya.github.io/site/Bolum6/index8.html" },
          { text: "Toprak pH ve Asitlik", link: "https://onurcatalkaya.github.io/site/Bolum7/index9.html" },
          { text: "Toprak Tipleri ve İsimlendirme", link: "https://onurcatalkaya.github.io/site/Bolum8/index10.html" },
          { text: "Toprak Erozyonu ve Korunma Yöntemleri", link: "https://onurcatalkaya.github.io/site/Bolum9/index11.html" },
          { text: "Toprak Analizi ve Testleri", link: "https://onurcatalkaya.github.io/site/Bolum10/index12.html" },
          { text: "Toprakta Mikroorganizmalar ve Canlılar", link: "https://onurcatalkaya.github.io/site/Bolum11/index13.html" },
          { text: "Toprak Biliminin Uygulama Alanları", link: "https://onurcatalkaya.github.io/site/Bolum12/index14.html" },
          { text: "TORPAQŞÜNASLIQ DATA", link: "https://onurcatalkaya.github.io/site/Data/index1.html" },
          // Diğer sonuçlar...
      ];

      for (let i = 0; i < siteContent.length; i++) {
          if (siteContent[i].text.toLowerCase().includes(searchTerm)) {
              searchResults.push(siteContent[i]);
          }
      }

      displayResults(searchResults);
  });

  function displayResults(results) {
      resultsList.innerHTML = "";

      if (results.length === 0) {
          resultsList.innerHTML = "<li>Hiç sonuç bulunamadı.</li>";
      } else {
          results.forEach(result => {
              const listItem = document.createElement("li");
              const link = document.createElement("a");
              link.href = result.link; // Sonuçların bağlantısını kullanın
              link.textContent = result.text;
              listItem.appendChild(link);
              resultsList.appendChild(listItem);
          });
      }
  }
});
