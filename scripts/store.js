const STORE = (() => {
  let usersData = {};

  function setUsersData(data) {
    usersData = data.results;
  }

  function getUsersData() {
    return usersData;
  }

  return {
    getUsersData,
    setUsersData,
  };
})();

export default STORE;
