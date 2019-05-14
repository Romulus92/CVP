$(document).ready(function () {
  //feedback form
  document.querySelector(".validate-name").addEventListener("blur", validateName);
  document.querySelector(".validate-age").addEventListener("blur", validateAge);
  document.querySelector(".validate-phone").addEventListener("blur", validatePhone);
  //ask form
  document.querySelector(".validate-phone1").addEventListener("blur", validatePhone1);
  document.querySelector(".validate-email").addEventListener("blur", validateEmail);
  //consult form
  document.querySelector(".validate-name2").addEventListener("blur", validateName2);
  document.querySelector(".validate-age2").addEventListener("blur", validateAge2);
  document.querySelector(".validate-phone2").addEventListener("blur", validatePhone2);

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

  //ask form
  function validateEmail() {
    const email = document.querySelector(".validate-email");
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!re.test(email.value)) {
      email.classList.add("is-invalid")
    } else {
      email.classList.remove("is-invalid")
    }
  }

  function validatePhone1() {
    const phone = document.querySelector(".validate-phone1")
    const re = /^((\+7|7|8)+\(([0-9]){3}\)+([0-9]){7})$/;

    if (!re.test(phone.value)) {
      phone.classList.add("is-invalid")
    } else {
      phone.classList.remove("is-invalid")
    }
  }

  //consult form

  function validateName2() {
    const name = document.querySelector(".validate-name2")
    const re = /^[а-яА-Я]{2,}$/;

    if (!re.test(name.value)) {
      name.classList.add("is-invalid")
    } else {
      name.classList.remove("is-invalid")
    }
  }

  function validateAge2() {
    const age = document.querySelector(".validate-age2")
    const re = /^[0-9]{1,3}$/;

    if (!re.test(age.value)) {
      age.classList.add("is-invalid")
    } else {
      age.classList.remove("is-invalid")
    }
  }

  function validatePhone2() {
    const phone = document.querySelector(".validate-phone2")
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
  $('.validate-phone1').mask('+Z(XXX)XXXXXXX', {
    'translation': {
      Z: {
        pattern: /7|8/
      },
      X: {
        pattern: /[0-9]/
      }
    },
  });
  $('.validate-phone2').mask('+Z(XXX)XXXXXXX', {
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