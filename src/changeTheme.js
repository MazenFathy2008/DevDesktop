export const changeTheme = () => {
  const divCheck = document.querySelector(".toggleThemeJs");
  const inputCheckbox = document.querySelector(".inputCheckBoxJs");
  const body = document.querySelector("body");
  console.log(localStorage.getItem("mode"));
  const savedMode = localStorage.getItem("mode");

  if (savedMode !== null) {
    inputCheckbox.checked = JSON.parse(savedMode);
    body.classList.toggle("dark", inputCheckbox.checked);
  } else {
    inputCheckbox.checked = true;
  }
  divCheck.addEventListener("click", () => {
    inputCheckbox.checked = !inputCheckbox.checked;
    localStorage.setItem("mode", JSON.stringify(inputCheckbox.checked));
    body.classList.toggle("dark", inputCheckbox.checked);
  });
};
