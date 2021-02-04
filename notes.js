var count = 0;     //counts number of saved notes
var maxlength = 100; //max number of charactes to show in preview form
var allNotes = []; //holds all notes
 
// resize textarea according to browser size
var winSize = window.innerWidth;
    if(winSize < 1024){
        $("textarea").attr("rows","16");
    }

// creates note preview for saved notes, with checks
$("#submit").click(function(){
var userNote  = $("textarea").val();
    allNotes.push(userNote);
if(userNote != null && userNote!= ""){
     count++;
     if(userNote.length > maxlength){
        var shortenedNote = userNote.slice(0,50);
    }else{
    shortenedNote = userNote; 
}
$("#showUserNote").append("<div class="+"previewNote"+" <h2 class="+"noteNumber"+">Note"+" "+count+"<button class="+"modalButton"+" data-bs-toggle="+"modal"+" onclick="+"getNote("+count+")"+" data-bs-target="+"#Modal"+">Open Note</button><hr></h2><div class="+"note"+">"+shortenedNote+"  </div></div>");
$(".previewNote").addClass("col-md-6"+" "+"note-bd");
$(".modalButton").addClass("btn"+" "+ "btn-primary"+" "+"btn-sm");
$("textarea").val("");  
} 
    else{
        alert("Hey, you can't save an empty note 😉");
    }
});


// delete all notes
$("#deleteList").click(function(){
    $(".previewNote").remove();
        count = 0;
    });


//modal contents   
function getNote(count){
    var modalNote = allNotes[count-1]; //-1 to get note index
    $(".modal-body").append(modalNote);
            $(".resetModal").click(function(){
                $(".modal-body").empty();
         });
    
}
