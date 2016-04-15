
/*
$(document).ready ->
  columns= new Array "last_week","projection","actual","pass_gap","comments"
  tdediting=0
  column=-1

  $("button").on "click",->
    html="<tr>"
    html+="<th>"+i+"</th>" for i in columns
    html+="</tr>"
    html+="<tr>"
    html+="<td>"+i+"</td>" for i in response
    html+="</tr>"
    $("table").html(html)

  $("table").on "dblclick","td",(e)->
    e.preventDefault()
    if tdediting isnt 1
      val=$(@).html()
      $tr=$(@).closest("tr")
      column=i for i in [0...$tr.children().length] when $tr.children().get(i) is @
      input="<input type='text' value='"+val+"'>"
      $(@).html input
      $(@).find(':checked,:selected,:text,textarea').focus()
      tdediting=1

  $("table").on "blur","td",(e)->
    e.preventDefault()
    val=$(@).find(':text').val()
    $tr=$(@).closest("tr")
    $tr.children().eq(column).html(val)
    tdediting=0
 */

(function() {
  var app;

  app = angular.module("qrp", []);

  app.controller("projectionsHandler", function() {
    var response1;
    response1 = ["23%", "40%", "35%", "5%", "Coverage gap because "];
    this.responses = [response1];
    this.view = 0;
    this.show = function() {
      return this.view = 1;
    };
    this.columns = ["last_week", "projection", "actual", "pass_gap", "comments"];
    this.isSet = function(view) {
      return view === 1;
    };
    this.toggle = function() {
      if (this.view === 1) {
        return this.view = 0;
      } else {
        return this.view = 1;
      }
    };
  });

  app.directive("projectionsTable", function() {
    return {
      restrict: 'E',
      templateUrl: 'projectionsTable.php'
    };
  });

  app.directive("projectionsToggle", function() {
    return {
      restrict: 'E',
      templateUrl: 'projectionsToggle.php'
    };
  });

}).call(this);
