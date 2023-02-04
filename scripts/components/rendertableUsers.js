const renderTableUsers = (users) =>
users
  .map(
    (user) => `
    <tr class="table-users__row">
      <td class="table-users__cell">${user.name.first}</td>
      <td class="table-users__cell">${user.name.last}</td>
      <td class="table-users__cell">${user.dob.age}</td>
      <td class="table-users__cell">${user.gender[0].toUpperCase()}</td>
      <td class="table-users__cell">${user.email}</td>
      <td class="table-users__cell">${user.nat}</td>
      <td class="table-users__cell">
        <img class="table-users__thumbnail" src="${
          user.picture.thumbnail
        }" alt="picture ${user.name.first}">
      </td>
    </tr>
  `
  )
  .join("");

  export default renderTableUsers
