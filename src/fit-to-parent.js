import sketch from 'sketch';

const doc = sketch.getSelectedDocument();
const selectedLayers = doc.selectedLayers;
const selectedCount = selectedLayers.length;

export function fitToParent() {
  if (selectedCount !== 1) {
    sketch.UI.message(`❌ Please select one layer.`);
  } else if (selectedLayers.layers[0].type === 'Artboard') {
    sketch.UI.message(`🖼 Can't fit artboards to parent.`);
  } else if (selectedLayers.layers[0].locked === true) {
    sketch.UI.message(`🔒 The layer is locked.`);
  } else {
    let myShape = selectedLayers.layers[0];
    let myParentWidth = myShape.parent.frame.width;
    let myParentHeight = myShape.parent.frame.height;
    myShape.frame.x = 0;
    myShape.frame.y = 0;
    myShape.frame.width = myParentWidth;
    myShape.frame.height = myParentHeight;
    sketch.UI.message('👨‍👦 Fit to parent width & height.');
  }
}

export function fitToParentWidth() {
  if (selectedCount !== 1) {
    sketch.UI.message(`❌ Please select one layer.`);
  } else if (selectedLayers.layers[0].type === 'Artboard') {
    sketch.UI.message(`🖼 Can't fit artboards to parent.`);
  } else if (selectedLayers.layers[0].locked === true) {
    sketch.UI.message(`🔒 The layer is locked.`);
  } else {
    let myShape = selectedLayers.layers[0];
    let myParentWidth = myShape.parent.frame.width;
    myShape.frame.x = 0;
    myShape.frame.width = myParentWidth;
    sketch.UI.message('↔️ Fit to parent width.');
  }
}

export function fitToParentHeight() {
  if (selectedCount !== 1) {
    sketch.UI.message(`❌ Please select one layer.`);
  } else if (selectedLayers.layers[0].type === 'Artboard') {
    sketch.UI.message(`🖼 Can't fit artboards to parent.`);
  } else if (selectedLayers.layers[0].locked === true) {
    sketch.UI.message(`🔒 The layer is locked.`);
  } else {
    let myShape = selectedLayers.layers[0];
    let myParentHeight = myShape.parent.frame.height;
    myShape.frame.y = 0;
    myShape.frame.height = myParentHeight;
    sketch.UI.message('↕️ Fit to parent height.');
  }
}
