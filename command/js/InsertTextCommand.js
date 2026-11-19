class InsertTextCommand {

    #oldContent;

    constructor(content) {
        this.context = document.getElementById("inputText");
        this.content = content;
    }

    do() {
        this.#oldContent = this.context.value;
        this.context.value += this.content;
    }

    undo() {
        this.context.value = this.#oldContent;
    }

}