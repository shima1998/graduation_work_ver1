let xmlHttpReq;

xmlHttpReq = new XMLHttpRequest();

function getBookProgressDataFromDB0(path, id){

    if (xmlHttpReq) {
        xmlHttpReq.open('GET', path, true);
        xmlHttpReq.onreadystatechange = function(){
            if (xmlHttpReq.readyState == 4){
                document.getElementById(id).innerHTML = xmlHttpReq.responseText;
            }
        }
    }
    xmlHttpReq.send(null);
}