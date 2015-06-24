(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

var makeArray = function makeArray(obj) {
  return [].slice.call(obj);
};
var qs = function qs(selector) {
  var context = arguments[1] === undefined ? document : arguments[1];
  return context.querySelector(selector);
};
var qsa = function qsa(selector) {
  var context = arguments[1] === undefined ? document : arguments[1];
  return makeArray(context.querySelectorAll(selector));
};

Han.fn.putRealBd = function () {
  var context = this.context;

  var hangable = qsa('h-hangable', context).map(function (hangable) {
    var cs = qs(':scope > h-cs', hangable);
    var bd = cs.getAttribute('biaodian');
    cs.innerHTML += '<h-real>' + bd + '</h-real>';
  });

  this.hangable = hangable;
  return this;
};

Han.fn.fixVernHanging = function () {
  var context = this.context;

  setTimeout(function () {
    qsa('h-hangable', context).forEach(function (hangable) {
      var outer = qs(':scope > h-cs', hangable);
      var inner = qs('h-inner', outer);
      var real = qs('h-real', outer);

      var outerH = outer.offsetHeight;
      var innerH = inner.offsetHeight;
      var outerW = outer.offsetWidth;
      var innerW = inner.offsetWidth;
      var realW = real.offsetWidth;
      var realL = real.style.lineHeight;

      if (innerH !== outerH || innerH === 0 && outerH === 0) {
        if (!hangable.matches(':last-child')) {
          real.style.marginRight = -(outerW - innerW) + 'px'
          //real.style.marginRight = -( outerW - realW/2 ) + 'px'
          ;
        }
      }
    });
  }, 1000);
  return this;
};

Han.fn.routine.push('putRealBd', 'fixVernHanging');
var inst = Han(document.body).render()

/*
const doesSupport = Han.support.writingmode
const dftOption   = {
  'biaodian': '',
}

const renderVern = ( context = document.body, option = {}) => {
  const finder = Han.find( context )

  finder
  .avoid( 'rt' )
  .groupify({
    western: true,
    biaodian: true,
  })
  .charify({
    biaodian: true,
    hanzi: true,
    eonmum: true,
  })

  return finder
}

Han.renderVern = renderVern

Han.fn.renderVern = ( option = {}) => {
  this.vern = Han.renderVern( this.context, option )
  return this
}

*/
;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvWWlqdW4vQ29kZS92ZXJudGFnZS9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQ0EsWUFBWSxDQUFBOztBQUVaLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFLLEdBQUc7U0FBTSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUU7Q0FBQSxDQUFBO0FBQ2pELElBQU0sRUFBRSxHQUFJLFNBQU4sRUFBRSxDQUFNLFFBQVE7TUFBRSxPQUFPLGdDQUFHLFFBQVE7U0FBTSxPQUFPLENBQUMsYUFBYSxDQUFFLFFBQVEsQ0FBRTtDQUFBLENBQUE7QUFDakYsSUFBTSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUssUUFBUTtNQUFFLE9BQU8sZ0NBQUcsUUFBUTtTQUFNLFNBQVMsQ0FBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxDQUFFLENBQUM7Q0FBQSxDQUFBOztBQUVoRyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxZQUFXO0FBQzVCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7O0FBRTVCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBRSxZQUFZLEVBQUUsT0FBTyxDQUFFLENBQzVDLEdBQUcsQ0FBQyxVQUFFLFFBQVEsRUFBTTtBQUNuQixRQUFNLEVBQUUsR0FBRyxFQUFFLENBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBRSxDQUFBO0FBQzFDLFFBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUUsVUFBVSxDQUFFLENBQUE7QUFDeEMsTUFBRSxDQUFDLFNBQVMsaUJBQWdCLEVBQUUsY0FBWSxDQUFBO0dBQzNDLENBQUMsQ0FBQTs7QUFFRixNQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtBQUN4QixTQUFPLElBQUksQ0FBQTtDQUNaLENBQUE7O0FBRUQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsWUFBVztBQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBOztBQUU1QixZQUFVLENBQUMsWUFBTTtBQUNqQixPQUFHLENBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBRSxDQUMzQixPQUFPLENBQUMsVUFBRSxRQUFRLEVBQU07QUFDdkIsVUFBTSxLQUFLLEdBQUksRUFBRSxDQUFFLGVBQWUsRUFBRSxRQUFRLENBQUUsQ0FBQTtBQUM5QyxVQUFNLEtBQUssR0FBSSxFQUFFLENBQUUsU0FBUyxFQUFFLEtBQUssQ0FBRSxDQUFBO0FBQ3JDLFVBQU0sSUFBSSxHQUFLLEVBQUUsQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFFLENBQUE7O0FBRXBDLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUE7QUFDakMsVUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQTtBQUNqQyxVQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFBO0FBQ2hDLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUE7QUFDaEMsVUFBTSxLQUFLLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQTtBQUMvQixVQUFNLEtBQUssR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQTs7QUFFcEMsVUFBSyxNQUFNLEtBQUssTUFBTSxJQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsQUFBRSxFQUFFO0FBQzFELFlBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFFLGFBQWEsQ0FBRSxFQUFFO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQSxBQUFFLEdBQUcsSUFBSTs7QUFBQSxXQUFBO1NBRXJEO09BQ0Y7S0FDRixDQUFDLENBQUE7R0FDRCxFQUFFLElBQUksQ0FBRSxDQUFBO0FBQ1QsU0FBTyxJQUFJLENBQUE7Q0FDWixDQUFBOztBQUVELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUUsQ0FBQTtBQUNwRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUUsUUFBUSxDQUFDLElBQUksQ0FBRSxDQUFDLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4ndXNlIHN0cmljdCdcblxuY29uc3QgbWFrZUFycmF5ID0gKCBvYmogKSA9PiBbXS5zbGljZS5jYWxsKCBvYmogKVxuY29uc3QgcXMgID0gKCBzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50ICkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKCBzZWxlY3RvciApXG5jb25zdCBxc2EgPSAoIHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQgKSA9PiBtYWtlQXJyYXkoIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKSlcblxuSGFuLmZuLnB1dFJlYWxCZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0XG5cbiAgY29uc3QgaGFuZ2FibGUgPSBxc2EoICdoLWhhbmdhYmxlJywgY29udGV4dCApXG4gIC5tYXAoKCBoYW5nYWJsZSApID0+IHtcbiAgICBjb25zdCBjcyA9IHFzKCAnOnNjb3BlID4gaC1jcycsIGhhbmdhYmxlIClcbiAgICBjb25zdCBiZCA9IGNzLmdldEF0dHJpYnV0ZSggJ2JpYW9kaWFuJyApXG4gICAgY3MuaW5uZXJIVE1MICs9IGA8aC1yZWFsPiR7IGJkIH08L2gtcmVhbD5gXG4gIH0pXG5cbiAgdGhpcy5oYW5nYWJsZSA9IGhhbmdhYmxlXG4gIHJldHVybiB0aGlzXG59XG5cbkhhbi5mbi5maXhWZXJuSGFuZ2luZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gIHFzYSggJ2gtaGFuZ2FibGUnLCBjb250ZXh0IClcbiAgLmZvckVhY2goKCBoYW5nYWJsZSApID0+IHtcbiAgICBjb25zdCBvdXRlciAgPSBxcyggJzpzY29wZSA+IGgtY3MnLCBoYW5nYWJsZSApXG4gICAgY29uc3QgaW5uZXIgID0gcXMoICdoLWlubmVyJywgb3V0ZXIgKVxuICAgIGNvbnN0IHJlYWwgICA9IHFzKCAnaC1yZWFsJywgb3V0ZXIgKVxuXG4gICAgY29uc3Qgb3V0ZXJIID0gb3V0ZXIub2Zmc2V0SGVpZ2h0XG4gICAgY29uc3QgaW5uZXJIID0gaW5uZXIub2Zmc2V0SGVpZ2h0XG4gICAgY29uc3Qgb3V0ZXJXID0gb3V0ZXIub2Zmc2V0V2lkdGhcbiAgICBjb25zdCBpbm5lclcgPSBpbm5lci5vZmZzZXRXaWR0aFxuICAgIGNvbnN0IHJlYWxXICA9IHJlYWwub2Zmc2V0V2lkdGhcbiAgICBjb25zdCByZWFsTCAgPSByZWFsLnN0eWxlLmxpbmVIZWlnaHRcblxuICAgIGlmICggaW5uZXJIICE9PSBvdXRlckggfHwgKCBpbm5lckggPT09IDAgJiYgb3V0ZXJIID09PSAwICkpIHtcbiAgICAgIGlmICggIWhhbmdhYmxlLm1hdGNoZXMoICc6bGFzdC1jaGlsZCcgKSkge1xuICAgICAgICByZWFsLnN0eWxlLm1hcmdpblJpZ2h0ID0gLSggb3V0ZXJXIC0gaW5uZXJXICkgKyAncHgnIFxuICAgICAgICAvL3JlYWwuc3R5bGUubWFyZ2luUmlnaHQgPSAtKCBvdXRlclcgLSByZWFsVy8yICkgKyAncHgnIFxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgfSwgMTAwMCApXG4gIHJldHVybiB0aGlzIFxufVxuXG5IYW4uZm4ucm91dGluZS5wdXNoKCAncHV0UmVhbEJkJywgJ2ZpeFZlcm5IYW5naW5nJyApXG5sZXQgaW5zdCA9IEhhbiggZG9jdW1lbnQuYm9keSApLnJlbmRlcigpXG5cbi8qXG5jb25zdCBkb2VzU3VwcG9ydCA9IEhhbi5zdXBwb3J0LndyaXRpbmdtb2RlXG5jb25zdCBkZnRPcHRpb24gICA9IHtcbiAgJ2JpYW9kaWFuJzogJycsXG59XG5cbmNvbnN0IHJlbmRlclZlcm4gPSAoIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5LCBvcHRpb24gPSB7fSkgPT4ge1xuICBjb25zdCBmaW5kZXIgPSBIYW4uZmluZCggY29udGV4dCApXG5cbiAgZmluZGVyXG4gIC5hdm9pZCggJ3J0JyApXG4gIC5ncm91cGlmeSh7XG4gICAgd2VzdGVybjogdHJ1ZSxcbiAgICBiaWFvZGlhbjogdHJ1ZSxcbiAgfSlcbiAgLmNoYXJpZnkoe1xuICAgIGJpYW9kaWFuOiB0cnVlLFxuICAgIGhhbnppOiB0cnVlLFxuICAgIGVvbm11bTogdHJ1ZSxcbiAgfSlcblxuICByZXR1cm4gZmluZGVyXG59XG5cbkhhbi5yZW5kZXJWZXJuID0gcmVuZGVyVmVyblxuXG5IYW4uZm4ucmVuZGVyVmVybiA9ICggb3B0aW9uID0ge30pID0+IHtcbiAgdGhpcy52ZXJuID0gSGFuLnJlbmRlclZlcm4oIHRoaXMuY29udGV4dCwgb3B0aW9uIClcbiAgcmV0dXJuIHRoaXNcbn1cblxuKi9cbiJdfQ==
