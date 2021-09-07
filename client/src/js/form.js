document.addEventListener("DOMContentLoaded", () => {
  const ajaxSend = async (formData) => {
    const fetchResp = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    });
    if (!fetchResp.ok) {
      throw new Error(
        `Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`
      );
    }
    return await fetchResp.json();
  };

  const forms = document.querySelectorAll(".js-form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);

      ajaxSend(formData)
        .then((response) => {
          console.log(response);
          form.reset();
        })
        .catch((err) => console.error(err));
    });
  });
});
