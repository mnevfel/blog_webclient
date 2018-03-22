import { Providers } from "./index";

export class DateTimeProvider {
    FromMillis(value) {
        return this.OnlyDate(value) + " " + this.OnlyTime(value);
    }
    WithSec(value) {
        return this.OnlyDate(value) + " " + this.TimeWithSec(value);
    }
    OnlyDate(value) {
        let curr = parseInt(value);
        if (curr) {
            var date = new Date();
            return date.toLocaleDateString("tr");
        }
    }
    OnlyTime(value) {
        var date = new Date(parseInt(value));
        return Providers.Logic.FixZero(date.getHours()) + ":" + Providers.Logic.FixZero(date.getMinutes());
    }
    TimeWithSec(value) {
        var date = new Date(parseInt(value));
        return Providers.Logic.FixZero(date.getHours()) + ":" + Providers.Logic.FixZero(date.getMinutes()) + ":" + Providers.Logic.FixZero(date.getSeconds());
    }
    Ymd(d) {
        return d.getFullYear() + "-" + Providers.Logic.FixZero((d.getMonth() + 1)) + "-" + Providers.Logic.FixZero(d.getDate());
    }
    Iso(d) {
        return d.getFullYear() + "-" + Providers.Logic.FixZero((d.getMonth() + 1)) + "-" + Providers.Logic.FixZero(d.getDate()) + "T" + Providers.Logic.FixZero(d.getHours()) + ":" + Providers.Logic.FixZero(d.getMinutes());
    }
}