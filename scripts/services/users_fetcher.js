import { apiFetch } from "./api_fetcher.js";

export const UsersFetcher = (function () {
  return {
    usersFifteen: function () {
      const args = {
        endpoint: "?results=15",
        headers: { "Content-Type": "application/json" },
        body: "",
      };
      return apiFetch(args);
    },
  };
})();
