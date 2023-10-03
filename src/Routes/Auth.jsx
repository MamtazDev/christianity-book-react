export function isAuthenticated() {
    return !!localStorage.getItem("loggedInUser");
  }
  