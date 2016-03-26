(function () {
  'use strict';
  
  var date = new Date();
  $('#copyrightYear').append('&#169; ' + 'Copyright ' + (1900 + date.getYear()) + ' Ristorante Con Fusion');
})();