$(document).ready(function () {
  //history form
  document.querySelector(".validate-name-docs").addEventListener("blur", validateNameDocs);
  document.querySelector(".validate-phone-docs").addEventListener("blur", validatePhoneDocs);

  //history form

  function validatePhoneDocs() {
    const phone = document.querySelector(".validate-phone-docs")
    const re = /^((\+7|7|8)+\(([0-9]){3}\)+([0-9]){7})$/;

    if (!re.test(phone.value)) {
      phone.classList.add("is-invalid")
    } else {
      phone.classList.remove("is-invalid")
    }
  }

  function validateNameDocs() {
    const email = document.querySelector(".validate-name-docs");
    const re = /^[а-яА-Я]{2,}$/;

    if (!re.test(email.value)) {
      email.classList.add("is-invalid")
    } else {
      email.classList.remove("is-invalid")
    }
  }

  $('.validate-phone-docs').mask('+Z(XXX)XXXXXXX', {
    'translation': {
      Z: {
        pattern: /7|8/
      },
      X: {
        pattern: /[0-9]/
      }
    },
  });
});