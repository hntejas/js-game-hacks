/*
 Game URL: http://zzzscore.com/1to50
*/

/*
    Set as required - Interval between each number touch
    units: milliseconds
    Note: Cannot be less than 30ms - Min time for next number dom element to be populated
*/
var GAME_SPEED = 300;

var numberCount = 0;
var touchStartevent;
var touchEndevent;

var customIntervalHandler = setInterval(function () {
  numberCount++;

  if (numberCount > 51) {
    clearInterval(customIntervalHandler);
    return;
  }
  var numberTagEl = getElementsByText(String(numberCount));
  var numberBox = numberTagEl[0];

  //For the 50th box, special handle on fetching the element
  if (numberCount == 50) {
    numberBox = numberTagEl[1];
  }

  touchStartevent = $.Event("touchstart", { pageX: 200, pageY: 200 });
  touchEndevent = $.Event("touchend", { pageX: 200, pageY: 200 });

  $(numberBox).trigger(touchStartevent);
  $(numberBox).trigger(touchEndevent);
}, GAME_SPEED);

function getElementsByText(str, tag = "div") {
  return Array.prototype.slice
    .call(document.getElementsByTagName(tag))
    .filter((el) => el.textContent.trim() === str.trim());
}
