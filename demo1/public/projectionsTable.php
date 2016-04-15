<table ng-show="projctns.isSet(projctns.view)">
  <tr>
    <th ng-repeat="column in projctns.columns">{{column}}</th>
  </tr>
  <tr ng-repeat="response in projctns.responses">
    <td ng-repeat="cellVal in response">{{cellVal}}</td>
  </tr>
</table>