// BACK END



// FRONT END

$(document).ready(function () {
  $('form.inputNumberForm').click(function (event) {
    event.preventDefault();
    var arr1 = [];
    var arr2 = [];
    var userInput = ($('input#inputNumber').val());



    for (var i = 0; i <= userInput; i++) {
      var x = i.toString();
      arr1.push(x)
    };

      arr1.forEach(function(g) {
        if ((g.includes("3"))) {
          arr2.push(" I'm sorry, Dave. I'm afraid I can't do that.")
      } else if ((g.includes("2"))) {
          arr2.push(" boop");
      } else if ((g.includes("1"))) {
          arr2.push(" beep");
      } else {
          arr2.push(g);
      }
    });
    $("h1#result").text(arr2);
  });
});
