<!DOCTYPE HTML>

<html ng-app="qrp">
  <head>
    <meta charset="UTF-8"></meta>
    <title>Project reporting portal copy </title>
    <link href="dist/css/style.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
    <script src="dist/js/app.js"></script>
  </head>
  <body>
    <div class="col-md-12" ng-controller="projectionsHandler as projctns">
      <h2>Qualcomm Reporting Portal</h2>
      <projections-toggle></projections-toggle>
      <projections-table></projections-table>
    </div>
  </body>
</html>