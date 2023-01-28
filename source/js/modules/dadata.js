const token = '0e1d500e7cbf84f1ddb2a0a984061825577b7ba5';

const initAddress = () => {
  $("#address").suggestions({
    token: token,
    type: "ADDRESS"
  });
}

function init($surname, $name) {
  var self = {};
  self.$surname = $surname;
  self.$name = $name;

  var fioParts = ["SURNAME", "NAME"];
  $.each([$surname, $name], function(index, $el) {
    var sgt = $el.suggestions({
      token: token,
      type: "NAME",
      triggerSelectOnSpace: false,
      hint: "",
      noCache: true,
      params: {
        // каждому полю --- соответствующая подсказка
        parts: [fioParts[index]]
      },
    });
  });
};

function initEmail() {
  $("#email").suggestions({
    token: token,
    type: "EMAIL",
});
}



export { initAddress, init, initEmail };