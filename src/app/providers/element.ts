declare var $;
export class ElementProvider {
    Block(selector) {
        $(selector).block({
            message: '',
            overlayCSS: { backgroundColor: 'transparent' }
        });
    }
    UnBlock(selector) {
        $(selector).unblock();
    }
}