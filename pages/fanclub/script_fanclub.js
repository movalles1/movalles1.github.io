document.addEventListener('DOMContentLoaded', fanclub)

function fanclub() {
    var successPanel = document.getElementById('success_panel');
    var showSuccess = document.getElementById('success');
    var formDiv = document.getElementById('form');
    document.getElementById('join_submit').addEventListener('click', function(event) {
        var req=new XMLHttpRequest();
        var results = {name:null, email:null, comment:null};
        var name=document.getElementById("name_input");
        results.name = name.value;
        var email=document.getElementById("email_input");
        results.email = email.value;
        var comment=document.getElementById("comment_input");
        results.comment = comment.value;
        req.open("POST", 'https://httpbin.org/post', true );
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
            successPanel.style.display = 'block';
            showSuccess.textContent = "Thank you for joining us " + name.value + "!" ;
            showSuccess.style.fontSize = '30px';
            formDiv.style.display = 'none';
          }
    });
    req.send(JSON.stringify(results));
    event.preventDefault;
    });
};




