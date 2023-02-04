import DOMHandler from "./dom_handler.js";
import Main from "./pages/Main.js";
import { UsersFetcher } from "./services/users_fetcher.js";
import STORE from "./store.js";

(async () => {
  try {
    const usersData = await UsersFetcher.usersFifteen();
    STORE.setUsersData(usersData);
    return DOMHandler.render(Main);
  } catch (e) {
    console.log(e);
  }
})();
