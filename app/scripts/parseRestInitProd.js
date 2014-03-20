'use strict';

angular.module('parseAngularTodoodlyApp')
  .run(function(parseInitialize) {
    var applicationId = 'EyFXIlvfGNpyMxSsKX2PuEowMFt8TwnA012jAr8P',
      restKey = 'wHqWaDlBgYAs245Boeqr4wSzaIEtL4L02Myj23Od';

    parseInitialize(applicationId, restKey);
  });