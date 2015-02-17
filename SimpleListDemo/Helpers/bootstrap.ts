interface JQuery {
    modal(command: string): JQuery;
}

module Bootstrap {
    export class Modal {
        constructor(private selector: string) {
        }
        set Title(value: string) {
            $(this.selector + ' .modal-title').html(value);
        }
        Show() {
            $(this.selector).modal('show');
        }
        Hide() {
            $(this.selector).modal('hide');
        }
    }
}