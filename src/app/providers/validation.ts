declare var $ :any;

export class ValidationProvider {
  public FormValidate(selector, rules, onSubmit): any {
    let form = $(selector);
    let validator = form.validate({
      rules: rules
    });
    form.submit((e) => {
      if (form.valid()) {
        onSubmit();
      }
      e.preventDefault();
      return;
    });
    return validator;
  }
}
