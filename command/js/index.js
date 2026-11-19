let doCommandList = [];
let undoCommandList = [];

function addText(text) {
    let insertTextCommand = new InsertTextCommand(text);
    insertTextCommand.do();
    doCommandList.push(insertTextCommand);
}

btA.onclick = () => { addText("A"); };
btB.onclick = () => { addText("B"); };
btC.onclick = () => { addText("C"); };

function undo() {
    let command = doCommandList.pop();
    command.undo();
    undoCommandList.push(command);
}

function redo() {
    let command = undoCommandList.pop();
    command.do();
    doCommandList.push(command);
}

btUndo.onclick = () => { undo();};
btRedo.onclick = () => { redo(); };

document.addEventListener("keydown", (event) => {
  const isCtrl = event.ctrlKey;
  const isZ = event.code === "KeyZ" || event.key.toLowerCase() === "z";
  if (isCtrl && isZ) {
    event.preventDefault();
    undo();
  }
});

document.addEventListener("keydown", (event) => {
  const isCtrl = event.ctrlKey;
  const isY = event.code === "KeyY" || event.key.toLowerCase() === "y";
  if (isCtrl && isY) {
    event.preventDefault();
    redo();
  }
});