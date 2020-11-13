$(document).ready(function () {
  $("#stringEncryptor").submit(function (event) {
    event.preventDefault();
    $("#encriptedString").empty();
    let cipher = $("#sentence").val();
    let cipheredString = [];
    for (let i = 2; i < cipher; i++) {
      let x = Math.ceil(cipher / i);

      if ((i === x || i === x + 1) && (i * x >= cipher || i * (x + 1) >= cipher)) {
        cipheredString = [i, x];
      }

    }
    $("#encryptedString").html(cipheredString)
  })
})
