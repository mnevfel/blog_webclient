declare var $:any;
export class OperationProvider {
  OnClick(selector, callback) {
    setTimeout(() => {
      var $elms = $('[data-op="' + selector + '"]');
      $.each($elms, (index, elm) => {
        var $elm = $(elm);
        $elm.on("click", () => {
          callback($elm.attr("data-key"));
        });
      });
    })
  }

  SetLoading(selector, enable) {
    var $elm = $('[data-op="' + selector + '"]');
    var classStr = "m-loader m-loader--right m-loader--light";
    if (enable) {
      $elm.addClass(classStr);
      $elm.addClass("disabled");
    }
    else {
      $elm.removeClass(classStr);
      $elm.removeClass("disabled");
    }
  }
}
