$(document).ready(function () {
  //history form
  document.querySelector(".validate-email-team").addEventListener("blur", validateEmailTeam);
  document.querySelector(".validate-phone-team").addEventListener("blur", validatePhoneTeam);

  //history form

  function validatePhoneTeam() {
    const phone = document.querySelector(".validate-phone-team")
    const re = /^((\+7|7|8)+\(([0-9]){3}\)+([0-9]){7})$/;

    if (!re.test(phone.value)) {
      phone.classList.add("is-invalid")
    } else {
      phone.classList.remove("is-invalid")
    }
  }

  function validateEmailTeam() {
    const email = document.querySelector(".validate-email-team");
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!re.test(email.value)) {
      email.classList.add("is-invalid")
    } else {
      email.classList.remove("is-invalid")
    }
  }

  $('.validate-phone-team').mask('+Z(XXX)XXXXXXX', {
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