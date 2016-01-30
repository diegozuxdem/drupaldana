var isNS = navigator.appName.indexOf("Netscape") != -1;
var isIE = navigator.appName.indexOf("Microsoft") != -1;
var selectedObj;
var x, y; // top-left corner
var x2, y2; // bottom-right corner
var width, height;

function updatePos(id, left, top) {
  var layer = document.getElementById(id);
  if (layer) {
    if (layer.style.pixelLeft && layer.style.pixelTop) {
      layer.style.pixelLeft = left;
      layer.style.pixelTop = top;
    } else {   
      layer.style.left = (parseInt(left, 10) ) + "px";
      layer.style.top = (parseInt(top, 10) ) + "px";
    }
  }
}
function getHotSpotForm()
{
  var theForm = null;
  
  if ( document.forms.hotspotQuestionForm)
  {
    theForm = document.forms.hotspotQuestionForm;	
  }
  else
  {	  
    var inputElement = document.getElementsByName("upperLeft")[0];
    theForm = inputElement.form;
  }
  
  return theForm;
}
function setLayerSize(id, width, height) {
  var layer = document.getElementById(id);
  if (layer) {
    layer.style.width = width + "px";
    layer.style.height = height + "px";
    layer.style.display = "block";
  }
}
function setSelected(evt) {
  var theHotSpotForm = getHotSpotForm();
  if (theHotSpotForm.imageFileName) {
    var imageIdentifier = theHotSpotForm.imageFileName.value;
    var target = (evt.target) ? evt.target : evt.srcElement;
    if (target.src) {
      if (target.src.indexOf(imageIdentifier) != -1) {
        selectedObj = target;
        return;
      }
    }
  }
  selectedObj = null;
  return;
}

function isLeftClick(evt) {
  var clickType = 1;
  if (isNS) {
    clickType = (evt.button === 0) ? 1 : evt.button;
  } else {
    clickType = evt.button;
  }
  if (clickType == 1) {
    return true;
  }
  return false;
}

function isLayerVisible(layerId) {
  var layerObj = document.getElementById(layerId);
  if (layerObj) {
    if (layerObj.style.display != "none") {
      return true;
    } else {
      return false;
    }
  }
}  

function doMouseDown(evt) {
  evt = (evt) ? evt : event;
  if (!isLeftClick(evt)) {
    return;
  }
  setSelected(evt);
  if (selectedObj) {
    if (isLayerVisible("hotspot")) {
      selectedObj = null;
      alert(document.getElementById("clearHSMessage").innerHTML);
      return;
    }
    if (evt.layerX) {
      x = evt.layerX;
      y = evt.layerY;
    } else if (evt.pageX) {
      x = evt.pageX - selectedObj.x;
      y = evt.pageY - selectedObj.y;
    } else if (evt.offsetX || evt.offsetY) {
      x = evt.offsetX;
      y = evt.offsetY;
    } else if (evt.clientX) {
      x = evt.clientX;
      y = evt.clientY;
    }
    var topLeft = document.getElementById("topLeft");
    topLeft.innerHTML = x + ", " + y;
    var theHotSpotForm = getHotSpotForm();
    theHotSpotForm.upperLeft.value = x;
    theHotSpotForm.upperRight.value = y;
    return false;
  } else {
      var target = (evt.target) ? evt.target : evt.srcElement;
      if ((target.id && target.id=='hotspot') && isLayerVisible("hotspot")) {
        selectedObj = null;
        alert(document.getElementById("clearHSMessage").innerHTML);
        return;
      }
  }
  return true;
}
function dragIt(evt) {
  evt = (evt) ? (evt) : event;
  var target = (evt.target) ? evt.target : evt.srcElement;
  if (selectedObj) {
    if (evt.layerX) {
      x2 = evt.layerX;
      y2 = evt.layerY;
    } else if (evt.pageX) {
      x2 = evt.pageX - selectedObj.x;
      y2 = evt.pageY - selectedObj.y;
    } else if (evt.offsetX || evt.offsetY) {
      x2 = evt.offsetX;
      y2 = evt.offsetY;
    } else if (evt.clientX) {
      x2 = evt.clientX;
      y2 = evt.clientY;
    }

    if (target.id) {
      if ((target.id == selectedObj.id) || (target.id == 'hotspot')) {
        if (target.id == 'hotspot') {
            x2 = x + x2;
            y2 = y + y2;
        }
        if (x2 > x && y2 > y) {
          var theHotSpotForm = getHotSpotForm();
          theHotSpotForm.lowerLeft.value = x2;
          theHotSpotForm.lowerRight.value = y2;
          var bottomRight = document.getElementById("bottomRight");
          bottomRight.innerHTML = x2 + ", " + y2;
          updatePos("hotspot", x, y);
          var newX = x2 - x;
          var newY = y2 - y;
          if (newX > 0 && newY > 0) {
            setLayerSize("hotspot", newX, newY);
          }
        }
      }
    }
    return false;
  }
  return true;
}

function clearImageMap(layerId) {
  var layer = document.getElementById(layerId);
  if (layer) {
    layer.style.display = "none";
  }
  
  question.onGradingChange();
  
  var theHotSpotForm = getHotSpotForm();
  theHotSpotForm.upperLeft.value = "";
  theHotSpotForm.upperRight.value = "";
  theHotSpotForm.lowerLeft.value = "";
  theHotSpotForm.lowerRight.value = "";
  var topLeft = document.getElementById("topLeft");
  if (topLeft) {
    topLeft.innerHTML = "";
  }
  var bottomRight = document.getElementById("bottomRight");
  if (bottomRight) {
    bottomRight.innerHTML = "";
  }
}

function release(evt) {
  evt = (evt) ? (evt) : event;
  if (selectedObj) {
    var target = (evt.target) ? evt.target : evt.srcElement;
    if (evt.layerX) {
      x2 = evt.layerX;
      y2 = evt.layerY;
    } else if (evt.pageX) {
      x2 = evt.pageX - selectedObj.x;
      y2 = evt.pageY - selectedObj.y;
    } else if (evt.offsetX || evt.offsetY) {
      x2 = evt.offsetX;
      y2 = evt.offsetY;
    } else if (evt.clientX) {
      x2 = evt.clientX;
      y2 = evt.clientY;
    }
    if (target.id && target.id == 'hotspot') {
        x2 = x + x2;
        y2 = y + y2;
    }
    if (x2 > x && y2 > y) {
      var theHotSpotForm = getHotSpotForm();
      theHotSpotForm.lowerLeft.value = x2;
      theHotSpotForm.lowerRight.value = y2;
      var bottomRight = document.getElementById("bottomRight");
      bottomRight.innerHTML = x2 + ", " + y2;
      if (x2 > selectedObj.width || y2 > selectedObj.height) {
        clearImageMap("hotspot");
      } else {
        updatePos("hotspot", x, y);
        var newX = x2 - x;
        var newY = y2 - y;
        if (newX > 0 && newY > 0) {
          setLayerSize("hotspot", newX, newY);
        }
      }
      question.onGradingChange();
    }
    selectedObj = null;
    return false;
  }
  return true;
}

/**
* Adding this relative positioning function to fix some crossbrowser issues.
*/
function relativePositionLayer(parentId, overlayId, left, top, right, bottom) {
  //these coords are relative to the wrapper object
  var overlay = document.getElementById(overlayId);
  var parent = document.getElementById(parentId);
    
  // IE treats the padding differently than other browsers
  if (isIE && parent.currentStyle.paddingLeft && parent.currentStyle.paddingTop) {
    overlay.style.left = (parseInt(left, 10) + parseInt(parent.currentStyle.paddingLeft, 10)) + "px";
    overlay.style.top = (parseInt(top, 10) + parseInt(parent.currentStyle.paddingTop, 10)) + "px";
  } else {
    overlay.style.left = left + "px";
    overlay.style.top = top + "px";
  }
  if (right && bottom) {
    overlay.style.width = ((parseInt(right, 10) - parseInt(left, 10))) + "px";
    overlay.style.height = ((parseInt(bottom, 10) - parseInt(top, 10))) + "px";
  }
  overlay.style.display = "block";
}
function positionLayer(destId, srcId, left, top, right, bottom) {
  if (left && top) {
    if ((parseInt(left, 10) < 0) || (parseInt(top, 10) < 0)) {
      return false;
    }
    var dest = document.getElementById(destId);
    if (!dest) {
      return false;
    }
    var src = document.getElementById(srcId);
    var offsetX = parseInt(left, 10);
    var offsetY = parseInt(top, 10);
    src.style.display = "block";
    if (isIE) {
      src.style.pixelLeft = offsetX;
      src.style.pixelTop = offsetY;
    } else {
      src.style.left = offsetX + "px";
      src.style.top = offsetY + "px";
    }
    if (right && bottom) {
     var iRight = parseInt(right, 10);
     var iLeft = parseInt(left, 10);
     var iBottom = parseInt(bottom, 10);
     var iTop = parseInt(top, 10); 
     var newWidth = iRight-iLeft;
     var newHeight = iBottom-iTop;
     if (newWidth > 0 && newHeight > 0) {
      src.style.width = newWidth + "px";
      src.style.height = newHeight + "px";
      }
    }
  }
}

// image.onload does not work well on IE -- too many timing issues
// The following methods work by executing all image.onload methods from body.onload.
var hotspotCanvasLoadMethods = [];
function registerLoadMethod(loadMethod) {
  if (loadMethod) {
    hotspotCanvasLoadMethods.push(loadMethod);
  }
}
function onloadCanvas() {
  for (var i = 0; i < hotspotCanvasLoadMethods.length; ++i) {
    if (hotspotCanvasLoadMethods[i]) {
      hotspotCanvasLoadMethods[i]();
    }
  }
}
function getAdjustedLeft(left) {
      //to fix safari, hardcode widths
  var newLeft = parseInt(left, 10) - 8;
  return newLeft;
}
function getAdjustedTop(top) {

      //to fix safari, hardcode widths
  var newTop = parseInt(top, 10) - 8;
  return newTop;
}

function validateHotspotDefined( numOfAttempts ) 
{
  if (!question.validateQuestionForm( numOfAttempts ) )
  {
    return false;
  }
  var hsi = document.getElementById("hotspotImage"); 
  if (hsi && !isLayerVisible("hotspot")) 
  {
     alert(document.getElementById("missingHSRegion").innerHTML);
     return false;
  }
  var theForm = getHotSpotForm();
  if ( theForm.hotspotPicker_selectedFileSource && theForm.hotspotPicker_selectedFileSource.value === '' )
  {
    alert( page.bundle.getString("filePicker.validate.one") );
    return false;
  }  
  return true;
}

function nextPage()
{
  if (validateHotspotDefined() ) 
  {
    window.submit('next', false);
  }
  return false;
}

function initEvents() {
  document.onmousedown = doMouseDown;
  document.onmousemove = dragIt;
  document.onmouseup = release;

    // SCR #12494      
  var hotspotImage = document.getElementById("hotspotImage");
  if (hotspotImage && hotspotImage.onload) {
    hotspotImage.onload();
  }
}
