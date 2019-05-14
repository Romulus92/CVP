$(document).ready(function () {
  //feedback form
  document.querySelector(".validate-name").addEventListener("blur", validateName);
  document.querySelector(".validate-age").addEventListener("blur", validateAge);
  document.querySelector(".validate-phone").addEventListener("blur", validatePhone);


  //feedback form
  function validateName() {
    const name = document.querySelector(".validate-name")
    const re = /^[а-яА-Я]{2,}$/;

    if (!re.test(name.value)) {
      name.classList.add("is-invalid")
    } else {
      name.classList.remove("is-invalid")
    }
  }

  function validateAge() {
    const age = document.querySelector(".validate-age")
    const re = /^[0-9]{1,3}$/;

    if (!re.test(age.value)) {
      age.classList.add("is-invalid")
    } else {
      age.classList.remove("is-invalid")
    }
  }

  function validatePhone() {
    const phone = document.querySelector(".validate-phone")
    const re = /^((\+7|7|8)+\(([0-9]){3}\)+([0-9]){7})$/;

    if (!re.test(phone.value)) {
      phone.classList.add("is-invalid")
    } else {
      phone.classList.remove("is-invalid")
    }
  }

  $('.validate-phone').mask('+Z(XXX)XXXXXXX', {
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