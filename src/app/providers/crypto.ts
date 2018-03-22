declare var aesjs;
export class CryptoProvider {
    private _key: string = "%3:xu#f%3=^.TQ.s";
    private _getKey() {
        return this.StringToBytes(this._key);
    }
    Encrypt(text) {
        var textBytes = aesjs.utils.utf8.toBytes(text);
        var aesCtr = new aesjs.ModeOfOperation.ctr(this._getKey(), new aesjs.Counter(5));
        var encryptedBytes = aesCtr.encrypt(textBytes);
        return aesjs.utils.hex.fromBytes(encryptedBytes);
    }
    Decrypt(text) {
        var encryptedBytes = aesjs.utils.hex.toBytes(text);
        var aesCtr = new aesjs.ModeOfOperation.ctr(this._getKey(), new aesjs.Counter(5));
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
        return aesjs.utils.utf8.fromBytes(decryptedBytes);
    }
    BytesToString(array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i]));
        }
        return result;
    }
    StringToBytes(str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            result.push(str.charCodeAt(i));
        }
        return result;
    }
}