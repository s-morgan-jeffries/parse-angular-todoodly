'use strict';

angular.module('parseAngularTodoodlyApp')
  .run(function(parseInitialize) {
    var applicationId = 'NnQ8Y9aZ7jcU2oGLzGfbyHJN3bvR08RN1b6oEtQC',
      restKey = 'OUtpox4mFt8ptb1kU27hqUiUIONUpF50KIjaKMx1';

    parseInitialize(applicationId, restKey);
  });
