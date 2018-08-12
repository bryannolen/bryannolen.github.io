function translocate(destination) {
  console.log(destination);
  encrypted = CryptoJS.AES.encrypt(destination, "test").toString();
  console.log(encrypted);
  console.log(CryptoJS.AES.decrypt(encrypted, "test").toString(CryptoJS.enc.Utf8));
};

$(document).ready(function() {
    $("#gobutton").click(function(){translocate($("#destination").val())});
    console.log("STARTED");
});
