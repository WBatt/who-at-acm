var data = {classNames: []};//array for the list
var tpl = "<ul class = class-list>{{#classNames}}<li>{{.}}</li>{{/classNames}}</ul>";//template for the list
window.onload = function() {
    
    //event listener for the enter key when in create class window
    document.getElementById("ClassName").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("CreateBtn").click();
        }
    });
    
};

function createClass() {
    $('.create-class-content').addClass("show-content");
}

function closeCreateClass() {
    $('.create-class-content').removeClass("show-content");
}


//takes the value in the input field and adds it to the list of classes
function createNewClass(){
    var newClass = document.getElementById('ClassName').value;
    document.getElementById('ClassName').value = '';
    data.classNames.push(newClass);
    var html = Mustache.to_html(tpl, data);
    $('#list').html(html);
    $('.create-class-content').removeClass("show-content");
}


//for getting the element of a click
//$(document).click(function(event) {
    //var text = $(event.target).text();
//});
