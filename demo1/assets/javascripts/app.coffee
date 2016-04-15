###
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

###

app=angular.module "qrp", [ ]

app.controller "projectionsHandler", ->
  response1=["23%","40%","35%","5%","Coverage gap because "]
  @.responses= [response1]
  @.view=0
  @.show= ->
    @.view=1
  @.columns= ["last_week","projection","actual","pass_gap","comments"]
  @.isSet=(view)->
    view is 1
  @.toggle=->
    if @.view is 1 then @.view = 0 else @.view =1
  return

app.directive "projectionsTable", ->
  restrict: 'E'
  templateUrl: 'projectionsTable.php'

app.directive "projectionsToggle", ->
  restrict: 'E'
  templateUrl: 'projectionsToggle.php'









