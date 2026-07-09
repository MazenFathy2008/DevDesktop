export default function scroll() {
  const list = document.querySelector(".list");

  document.querySelector(".left").addEventListener("click", () => {
    list.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  });

  document.querySelector(".right").addEventListener("click", () => {
    list.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  });
}
