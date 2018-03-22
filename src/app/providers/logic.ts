export class LogicProvider {
    FixZero(value) {
        return ('0' + value).slice(-2);
    }
    FixZeroTh(value) {
        return ('00' + value).slice(-3);
    }
    FixBytes(bytes) {
        var unit = 1024;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        if (bytes < unit) return bytes + " B";
        var exp = Math.log(bytes) / Math.log(unit);
        return bytes / Math.pow(unit, exp) + ' ' + sizes[exp];
    }
}