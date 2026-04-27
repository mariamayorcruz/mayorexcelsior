// Async Formspree submit (method POST + same action as native form). If you disable JS, the form still posts to Formspree.
(function () {
  const form = document.querySelector(".quote-form[data-form]");
  const formMessage = document.querySelector(".form-message");
  const submitBtn = form?.querySelector(".form-submit");

  if (!form || !formMessage) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    formMessage.textContent = "";
    formMessage.classList.remove("is-error", "is-success");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const action = form.getAttribute("action") || "";
    if (action.includes("TU_CODIGO_AQUI")) {
      formMessage.classList.add("is-error");
      formMessage.textContent =
        "Form is not connected yet. Replace TU_CODIGO_AQUI in index.html with your Formspree form ID.";
      return;
    }

    const previousLabel = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      const data = await response.json().catch(function () {
        return {};
      });

      if (response.ok) {
        formMessage.classList.add("is-success");
        formMessage.textContent = "Thank you — we received your quote request and will reply soon.";
        form.reset();
      } else if (data && data.error) {
        formMessage.classList.add("is-error");
        formMessage.textContent =
          typeof data.error === "string" ? data.error : "Something went wrong. Please try again or email us directly.";
      } else {
        formMessage.classList.add("is-error");
        formMessage.textContent = "We could not send your request. Please try again or email mayorexcelsiorllc@gmail.com.";
      }
    } catch (err) {
      formMessage.classList.add("is-error");
      formMessage.textContent =
        "Network error. Check your connection or email mayorexcelsiorllc@gmail.com directly.";
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = previousLabel || "Get My Free Quote Now";
      }
    }
  });
})();
