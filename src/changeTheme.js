export const changeTheme = () => {
  const divCheck = document.querySelector(".toggleThemeJs");
  const inputCheckbox = document.querySelector(".inputCheckBoxJs");
  const body = document.querySelector("body");
  divCheck.addEventListener("click", () => {
    inputCheckbox.checked = !inputCheckbox.checked;
    body.classList.toggle("dark", inputCheckbox.checked);
  });
};
