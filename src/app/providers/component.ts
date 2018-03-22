import { Providers } from "./index";

declare var $: any;
export class ComponentProvider {
    Select2(selector, data, callback) {
        $(selector).find("option[value]").remove();
        $(selector).unbind("change");
        $(selector).select2({
            allowClear: true,
            minimumResultsForSearch: 20,
            placeholder: 'Seçiniz..',
            data: data,
            language: 'tr'
        });

        $(selector).on("change", () => {
            $(selector).valid();
            if (callback) {
                let value = parseInt($(selector).select2("val"));
                callback(value);
            }
        });
        return {
            Set: (value) => {
                if (value) {
                    $(selector).val(value);
                    $(selector).trigger("change");
                }
            }
        }
    }

    Select2WS(options, callback) {
        let pageLength = options.length || 25;
        let obj = {
            placeholder: "Seçiniz..",
            language: 'tr',
            allowClear: true,
            ajax: {
                url: Providers.Location.API + options.url,
                headers: {
                    "Authorization": Providers.Location.Jwt()
                },
                dataType: 'json',
                delay: 250,
                data: (params) => {
                    return {
                        q: params.term,
                        page: params.page,
                        length: pageLength
                    };
                },
                processResults: (data, params) => {
                    params.page = params.page || 1;
                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * pageLength) < data.total_count
                        }
                    };
                },
                cache: false
            },
            escapeMarkup: (markup) => {
                return markup;
            },
            minimumInputLength: 0
        };
        let set = () => {
            $(options.selector).select2(obj);
            $(options.selector).bind("change", () => {
                $(options.selector).valid();
                if (callback) {
                    let value = parseInt($(options.selector).select2("val"));
                    callback(value);
                }
            });
        }
        set();

        return {
            Set: (value) => {
                try {
                    $(options.selector).select2("destroy");
                } catch (e) { }
                set();
                $(options.selector).val(value).trigger("change");
            },
            ChangeSource: (source) => {
                obj.ajax.url = Providers.Location.API + source;
            }
        }
    }

    MultiSelect2WS(options, callback) {
        let pageLength = options.length || 25;
        $(options.selector).select2({
            multiple: true,
            placeholder: "Seçiniz..",
            language: 'tr',
            allowClear: true,
            ajax: {
                url: Providers.Location.API + options.url,
                headers: {
                    "Authorization": Providers.Location.Jwt()
                },
                dataType: 'json',
                delay: 250,
                data: (params) => {
                    return {
                        q: params.term,
                        page: params.page,
                        length: pageLength
                    };
                },
                processResults: (data, params) => {
                    params.page = params.page || 1;
                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * pageLength) < data.total_count
                        }
                    };
                },
                cache: false
            },
            escapeMarkup: (markup) => {
                return markup;
            },
            minimumInputLength: 0
        });
        $(options.selector).on("change", (event, data) => {
            if (data ? !data.novalidate : true)
                $(options.selector).valid();
            if (callback) {
                let values = [];
                let passes = $(options.selector).select2("val");

                $(passes).each((index, val) => {
                    let value = parseInt(val);
                    if (value) {
                        values.push(value);
                    }
                    if (passes.length - 1 == index) {
                        callback(values);
                    }
                });
                if (passes.length == 0) {
                    callback([]);
                }
            }
        });
        return {
            Set: (values) => {
                if (!values)
                    values = [];
                $(options.selector).find("option:not([selected])").remove();
                $(options.selector).val(values).trigger("change", [{ novalidate: true }]);
            }
        }
    }

    DatePicker(selector, callback) {
        $(selector).datepicker({
            weekStart: 1,
            format: "dd.mm.yyyy",
            orientation: "top left",
            todayHighlight: true,
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        });
        $(selector).on("change", () => {
            $(selector).valid();
            let value = $(selector).val();
            if (value) {
                let partials = value.split('.');
                let date = new Date(partials[2], partials[1] - 1, partials[0]);
                if (date) {
                    if (callback) {
                        callback(date.getTime());
                    }
                }
            }
        });
        return {
            Set: (value) => {
                let curr = Providers.DateTime.OnlyDate(value);
                if (curr) {
                    var date = new Date(parseInt(value));
                    if (date)
                        $(selector).datepicker('setDate', date);
                }
            }
        }
    }
}