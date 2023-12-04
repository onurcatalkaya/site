document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector(".search_box input[type='text']");
  const resultsList = document.getElementById("results");

  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      const searchResults = [];

      // Sitenizde aramak istediğiniz içerikleri ekleyin ve her bir sonucun bağlantısını belirtin
      const siteContent = [
          { text: "Örnek Metin 1", link: "https://orneklink1.com" },
          { text: "Örnek Metin 2", link: "https://orneklink2.com" },
          { text: "Örnek Metin 3", link: "https://orneklink3.com" },
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
