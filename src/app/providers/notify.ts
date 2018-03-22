declare var toastr: any;
declare var swal: any;
export class NotifyProvider {
  Push(notification) {
    if (typeof toastr !== 'undefined') {
      notification.Title = notification.Title || "[Bildiri *-*]";
      notification.Status = notification.Status || "warning";
      notification.CloseButton = notification.CloseButton || true;
      notification.Debug = notification.Debug || false;
      notification.PositionClass = notification.PositionClass || "top-left";
      notification.OnClick = notification.OnClick || "";
      notification.TimeOut = notification.TimeOut || 5000;
      notification.ExtendedTimeOut = notification.ExtendedTimeOut || 15000;
      notification.ShowEasing = notification.ShowEasing || "easeInOutElastic";
      notification.HideEasing = notification.HideEasing || "easeInOutElastic";
      notification.ShowMethod = notification.ShowMethod || "show";
      notification.HideMethod = notification.HideMethod || "hide";

      toastr.options = {
        "closeButton": notification.CloseButton,
        "debug": notification.Debug,
        "positionClass": "toast-" + notification.PositionClass,
        "onclick": notification.OnClick,
        "showDuration": null,
        "hideDuration": null,
        "timeOut": notification.TimeOut,
        "extendedTimeOut": notification.ExtendedTimeOut,
        "showEasing": notification.ShowEasing,
        "hideEasing": notification.HideEasing,
        "showMethod": notification.ShowMethod,
        "hideMethod": notification.HideMethod
      };
      toastr[notification.Status](notification.Message,
        notification.Title);
    }
  }

  Confirm(confirm) {
    confirm.Status = confirm.Status;
    swal({
      title: confirm.Title,
      text: confirm.Message,
      type: confirm.Status,
      showCancelButton: true,
      confirmButtonText: confirm.AcceptButton,
      cancelButtonText: confirm.CancelButton
    }).then(function(result) {
      if (result.value) {
        if (confirm.Call)
          confirm.Call();
      } else if (result.dismiss === 'cancel') {

      }
    });
  }

  AreYouSureDelete(callback) {
    this.Confirm({
      Title: "Emin misiniz ?",
      Status: "warning",
      Message: "Veriyi sildiğinizde oluşabilecek durumları öngördüğünüzden emin misiniz ?",
      Call: callback,
      AcceptButton: "Eminim",
      CancelButton: "Vazgeç"
    });
  }
}
