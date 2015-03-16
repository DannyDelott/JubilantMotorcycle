angular.module('tastebud', ['ionic'])
.directive('submission', function(){

  return {
    restrict: 'EA',
    templateUrl: './app/submit/submission.html'
  };
});
