import renderTableUsers from "../components/rendertableUsers.js";
import CSV from "../components/utilities/downloadCSV.js";
import STORE from "../store.js";

const Main = (() => {
  function getUsers() {
    return STORE.getUsersData().sort((a, b) => a.dob.age - b.dob.age);
  }

  function sortUsersData(table) {
    let csv = "";
    for (let i = 0; i < table.rows.length; i++) {
      let rowData = "";
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        if (table.rows[i].cells[j].querySelector(".table-users__thumbnail")) {
          rowData +=
            table.rows[i].cells[j]
              .querySelector(".table-users__thumbnail")
              .getAttribute("src") + ",";
        } else {
          rowData += table.rows[i].cells[j].textContent + ",";
        }
      }
      csv += rowData + "\r\n";
    }
    return csv;
  }

  function onSubmit(event) {
    event.preventDefault();
    const table = document.querySelector(".js-table-users");
    CSV.download(sortUsersData(table), "tabla-usuarios.csv");
  }

  return {
    render: function () {
      const users = getUsers();

      return `
        <table class="table-users js-table-users">
          <thead class="table-users__head">
            <tr class="table-users__row">
              <th class="table-users__cell">Nombre</th>
              <th class="table-users__cell">Apellido</th>
              <th class="table-users__cell">Edad</th>
              <th class="table-users__cell">Genero</th>
              <th class="table-users__cell">Email</th>
              <th class="table-users__cell">Nacionalidad</th>
              <th class="table-users__cell">Foto</th>
            </tr>
          </thead>
          <tbody class="table-users__body">
            ${renderTableUsers(users)}
          </tbody>
        </table>
        <button class="submit-table" type="submit">Descargar en formato CSV</button>
      `;
    },
    addEventListener: function () {
      const container = document.querySelector(".submit-table");
      container.addEventListener("click", onSubmit);
    },
  };
})();

export default Main;
