$(document).ready(function () {
  //history form
  document.querySelector(".validate-name-history").addEventListener("blur", validateNameHistory);
  document.querySelector(".validate-phone-history").addEventListener("blur", validatePhoneHistory);

  //history form
  function validateNameHistory() {
    const name = document.querySelector(".validate-name-history")
    const re = /^[а-яА-Я]{2,}$/;

    if (!re.test(name.value)) {
      name.classList.add("is-invalid")
    } else {
      name.classList.remove("is-invalid")
    }
  }

  function validatePhoneHistory() {
    const phone = document.querySelector(".validate-phone-history")
    const re = /^((\+7|7|8)+\(([0-9]){3}\)+([0-9]){7})$/;

    if (!re.test(phone.value)) {
      phone.classList.add("is-invalid")
    } else {
      phone.classList.remove("is-invalid")
    }
  }

  $('.validate-phone-history').mask('+Z(XXX)XXXXXXX', {
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