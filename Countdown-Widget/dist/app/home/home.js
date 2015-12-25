(function() {
  'use strict';

  angular.module('app', ['ui.bootstrap'])
    .value('moment', moment)
    .filter('until', [formatDate])
    .controller('MainController', [controller]);

  function controller(){
    var vm = this;

    vm.events = [{
      subject: 'Linear Algebra',
      date: '02/15/2016',
      type: 'exam'
    }, {
      subject: 'Analytic Geometry',
      date: '02/02/2016',
      type: 'exam'
    },{
      subject: 'Calculus I',
      date: '01/28/2016',
      type: 'exam'
    }, {
      subject: 'C/C++ Programming',
      date: '02/10/2016',
      type: 'exam'
    }, {
      subject: 'WebGL',
      date: '02/19/2016',
      type: 'exam'
    }, {
      subject: 'GoLang',
      date: '02/13/2016',
      type: 'exam'
    }
    //  , {
    //  subject: 'End-to-end Applications',
    //  date: '01/22/2016',
    //  type: 'exam'
    //}, {
    //  subject: 'Slice & Dice',
    //  date: '01/23/2016',
    //  type: 'exam'
    //}
    ];
  }

  function formatDate(){
    return function(date){
      var today = moment();
      var examDate = moment(date);

      return examDate.diff(today, 'days');
    }
  }

})();
