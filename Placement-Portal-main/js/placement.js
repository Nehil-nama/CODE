document.addEventListener("DOMContentLoaded", function () {
    const companyTableBody = document.getElementById("company-body");
    const sortSelect = document.getElementById("sort");
  
    // Sample company data (you can replace this with actual data)
    const companies = [
      { name: "Company A", year: 2020, studentsPlaced: 50 },
      { name: "Company B", year: 2019, studentsPlaced: 40 },
      { name: "Company C", year: 2021, studentsPlaced: 60 },
      { name: "Company D", year: 2018, studentsPlaced: 35 },
    ];
  
    // Function to render companies
    function renderCompanies(companies) {
      companyTableBody.innerHTML = "";
      companies.forEach((company, index) => {
        const row = companyTableBody.insertRow();
        const serialNumberCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const yearCell = row.insertCell(2);
        const studentsPlacedCell = row.insertCell(3);
  
        serialNumberCell.textContent = index + 1;
        nameCell.textContent = company.name;
        yearCell.textContent = company.year;
        studentsPlacedCell.textContent = company.studentsPlaced;
      });
    }
  
    // Function to sort companies by name
    function sortByName(companies) {
      return companies.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    // Function to sort companies by year
    function sortByYear(companies) {
      return companies.sort((a, b) => a.year - b.year);
    }
  
    // Initial rendering
    renderCompanies(companies);
  
    // Event listener for sorting
    sortSelect.addEventListener("change", function () {
      const sortBy = sortSelect.value;
      if (sortBy === "name") {
        renderCompanies(sortByName(companies));
      } else if (sortBy === "year") {
        renderCompanies(sortByYear(companies));
      }
    });
  });
  