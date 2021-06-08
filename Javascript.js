var userArray = [];

if(localStorage.getItem('comments')==null){
     localStorage.setItem('comments',JSON.stringify(userArray));
}
showComments();

let names = document.getElementById('name');
let email = document.getElementById('email');
let show = document.getElementsByTagName('span');
let input = document.getElementsByTagName('input');


         email.onkeydown = function () {
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(email.value)) {
        show[1].innerText = "Email is Valid";
        show[1].style.color = "green";
    }
    else {
        show[1].innerText = "Email is not Valid";
        show[1].style.color = "#ff0000";
    }
}


      function addUser(){
        event.preventDefault();
          var username = document.getElementById('username').value;
         var email =  document.getElementById('email').value;
         

        var userComment = {
            "username" : username,
            "email"  : email
        }

       
        var comments = JSON.parse(localStorage.getItem('comments'))
        comments.push(userComment);
        localStorage.setItem('comments',JSON.stringify(comments));
        console.log(comments);

        emptyFiled();
        showComments();
      }

      function emptyFiled(){
          document.getElementById('username').value="";
          document.getElementById('email').value="";
          document.getElementById('comments').innerHTML="";
        }



        function showComments(){
          var allCommants = JSON.parse(localStorage.getItem('comments'));
          var commentList = document.getElementById('comments');
          for(var i=0; i<allCommants.length; i++){
            commentList.innerHTML=commentList.innerHTML+"<td class='td'>"+allCommants[i].username+"</td>"+"<td class='td'>"+allCommants[i].email+"</td>"+"<td class='td'>"+
            "<button class='js-btn' onclick=deleteComment("+allCommants[i].emailId+")>Delete</button>"+
            "</td>";
          }
          localStorage.getItem('comments',JSON.stringify(allCommants))

        }

        function deleteComment(emailId){
      event.preventDefault();
      var allComments=JSON.parse(localStorage.getItem("comments"));
      for(var i=0;i<allComments.length;i++){
        if(emailId === allComments[i].emailId){
          allComments.splice(i,1);
        }
      }
      localStorage.setItem("comments",JSON.stringify(allComments));
      emptyFiled();
      showComments();
    }