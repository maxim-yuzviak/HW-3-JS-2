const options = {
  threshold: 0.5,
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const newUrl = img.getAttribute("data-src");
      img.setAttribute("src", newUrl);
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

const images = document.querySelectorAll(".fruit-img");

images.forEach((img) => {
  observer.observe(img);
});
