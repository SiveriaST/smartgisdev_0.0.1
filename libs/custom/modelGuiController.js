function initModelPositioningGUIController() {
  const div = document.createElement('div')
  div.innerHTML = '' +
    '<div class="navigation-container">\n' +
    '  <div>Доступная геометрия</div>\n' +
    '  <select id="selectableGeometry"></select>\n' +
    '  <div class="btn-directions">\n' +
    '    <div id="objLeftAdd">X+</div>\n' +
    '    <div id="objTopAdd">X-</div>\n' +
    '    <div id="objLeftDef">Y+</div>\n' +
    '    <div id="objTopDef">Y-</div>\n' +
    '    <div id="objRotateLeft">Z+</div>\n' +
    '    <div id="objRotateRight">Z-</div>\n' +
    '    <div id="objRotateLeftR">rX+</div>\n' +
    '    <div id="objRotateRightR">rX-</div>\n' +
    '    <div id="objRotateYAdd">rZ+</div>\n' +
    '    <div id="objRotateYDef">rZ-</div>\n' +
    '  </div>\n' +
    '</div>';
  document.body.append(div)
  
  const selectableBox = document.querySelector("#selectableGeometry");
  const objLeftAdd = document.querySelector("#objLeftAdd");
  const objTopAdd = document.querySelector("#objTopAdd");
  const objLeftDef = document.querySelector("#objLeftDef");
  const objTopDef = document.querySelector("#objTopDef");
  const objZLeft = document.querySelector("#objRotateLeft");
  const objZRight = document.querySelector("#objRotateRight");
  const objRotateLeftR = document.querySelector("#objRotateLeftR");
  const objRotateRightR = document.querySelector("#objRotateRightR");
  const objRotateYAdd = document.querySelector("#objRotateYAdd");
  const objRotateYDef = document.querySelector("#objRotateYDef");
  
  objLeftAdd.addEventListener('click', () => {
    editGeometry(selectableBox, "x");
  });
  objTopAdd.addEventListener('click', () => {
    editGeometry(selectableBox, "xP");
  });
  objLeftDef.addEventListener('click', () => {
    editGeometry(selectableBox, "y");
  });
  objTopDef.addEventListener('click', () => {
    editGeometry(selectableBox, "yP");
  });
  objZLeft.addEventListener('click', () => {
    editGeometry(selectableBox, "z");
  });
  objZRight.addEventListener('click', () => {
    editGeometry(selectableBox, "zP");
  });
  objRotateLeftR.addEventListener('click', () => {
    editGeometry(selectableBox, "rR");
  });
  objRotateRightR.addEventListener('click', () => {
    editGeometry(selectableBox, "rL");
  });
  objRotateYAdd.addEventListener('click', () => {
    editGeometry(selectableBox, "zR");
  });
  objRotateYDef.addEventListener('click', () => {
    editGeometry(selectableBox, "zL");
  });
}

function selectableObjects(activeScene) {
  const selectableBox = document.querySelector("#selectableGeometry");
  if (!selectableBox) return
  
  activeScene.children[2].children.forEach(item => {
    let opt = document.createElement('option');
    opt.value = item.name;
    opt.innerHTML = item.name;
    selectableBox.appendChild(opt);
  });
}

function editGeometry(geometryName, editCommand) {
  let editableGeometry = false;
  let objectManipulate = potreeViewer.scene.scene.children[2].children.findIndex(item => item.name == geometryName.value);
  if(objectManipulate != -1) {
    const editObj = potreeViewer.scene.scene.children[2].children[objectManipulate];
    switch(editCommand) {
      case "x": {
        editObj.position.x++;
        break
      }
      case "xP": {
        editObj.position.x--;
        break
      }
      case "y": {
        editObj.position.y++;
        break
      }
      case "yP": {
        editObj.position.y--;
        break
      }
      case "z": {
        editObj.position.z++;
        break
      }
      case "zP": {
        editObj.position.z--;
        break
      }
      case "rR": {
        editObj.rotation.x = editObj.rotation.x + 0.1;
        break
      }
      case "rL": {
        editObj.rotation.x = editObj.rotation.x - 0.1;
        break
      }
      case "zR": {
        editObj.rotation.z = editObj.rotation.z + 0.1;
        break
      }
      case "zL": {
        editObj.rotation.z = editObj.rotation.z - 0.1;
        break
      }
    }
  }
}

export {initModelPositioningGUIController, editGeometry, selectableObjects}
