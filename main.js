
function add_item() {


  let item = document.getElementById(&quot;box&quot;);
  let list_item = document.getElementById(&quot;list_item&quot;);
  if(item.value != &quot;&quot;){

      
      let make_li = document.createElement(&quot;LI&quot;);
      make_li.appendChild(document.createTextNode(item.value));

      G
      list_item.appendChild(make_li);

      
      item.value=&quot;&quot;
      
    
      make_li.on click = function(){
        this.parentNode.removeChild(this);
      }

  }
  else{

    
    alert(&quot;plz add a value to item&quot;);
  }

}
