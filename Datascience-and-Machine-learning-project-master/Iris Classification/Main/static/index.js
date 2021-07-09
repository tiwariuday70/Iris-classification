function register(){
    var a1=document.getElementById('sepal_length').value;
    var a2=document.getElementById('sepal_width').value;
    var a3=document.getElementById('petal_length').value;
    var a4=document.getElementById('petal_width').value;
    if(a1=="" || a2=="" || a3=="" || a4==""){
        alert('please fill up all form')
    }else{
        var xhttp = new XMLHttpRequest();
        var url='/send_message?a1='+a1+'&a2='+a2+'&a3='+a3+'&a4='+a4;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
            {
                if(this.responseText=='setosa' || this.responseText=='versicolor' || this.responseText=='virginica'){
                    var nn=this.responseText
                    var val=nn+'.png';
                    // display image
                    document.getElementById('img_').src='/static/'+val;
                    document.getElementById('sepal_length').value="";
                    document.getElementById('sepal_width').value="";
                    document.getElementById('petal_length').value="";
                    document.getElementById('petal_width').value="";
                    }
                if(this.responseText=='false'){
                    alert(' could not convert string');
                    document.getElementById('sepal_length').value="";
                    document.getElementById('sepal_width').value="";
                    document.getElementById('petal_length').value="";
                    document.getElementById('petal_width').value="";
                }
            }
    };
    xhttp.open("GET",url, true);
    xhttp.send();
    }
}