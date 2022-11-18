//search message 1
function cID(){
  let cCid=document.getElementById("cCid").value;
  
  // window.alert(cCid.length)
  if(cCid.length==9 ){
    window.open(`https://sniffer.global-bilgi.com.tr/379/Monitoring#/q=id:${cCid}`, "_blank",)
    
  }else{
    window.alert('pleas Enter the ID')
  }
  
}

//search message 2
function cID2(){
  let cCid2=document.getElementById("cCid2").value;

  if(cCid2.length==9 ){
    window.open(`https://sniffer.global-bilgi.com.tr/379/Monitoring#/q=id:${cCid2}`, "_blank",)
    
  }else{
    window.alert('pleas Enter the ID')
}
}


//search user
function sID(){
  let sSid=document.getElementById("sSid").value;

  if(sSid.length==16 ){
    window.open(`https://sniffer.global-bilgi.com.tr/379/Monitoring#/&nq=fromuserid:${sSid}`, "_blank",)
    
  }else{
    window.alert('pleas Enter the ID')
}
}



//password
function smPassword(){
  let txtPassword=document.getElementById("exampleInputPassword1").value;
  if(txtPassword == 123456){
    document.getElementById("smPassword").remove();
  }else{
    document.getElementById('smPError').innerHTML += `<div class="alert alert-danger" role="alert">The Password is wrong!</div>`   ;
  }
}


function aOpenLink(){
  let aOLink=document.getElementsByTagName("input");
  for( let i =0;  i<aOLink.length; i++){
    
    if(aOLink[i].checked){

      
        window.open(aOLink[i].value, "_blank");
      
      
    }
      
  }

  
}


function checkAll(){
  let checkElt= document.getElementsByTagName("input");
  for(let c=0; c<checkElt.length; c++){
    checkElt[c].checked=true;
  }

}
function clearAll(){
  let checkElt= document.getElementsByTagName("input");
  for(let c=0; c<checkElt.length; c++){
    checkElt[c].checked=false;
  }

}