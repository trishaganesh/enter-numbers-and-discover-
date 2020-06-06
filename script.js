function auto_grow(element) {
    element.style.height = "3px";
    element.style.height = (element.scrollHeight)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

function generate() {
    subject = document.getElementById("subject").value;
    event = document.getElementById("event").value;
    event2 = document.getElementById("event2").value;
    if (subject.length==0 || event.length==0 || event2.length==0)
        return;
    result = `　　${subject}${event}¡Hola!${subject}Soy${subject}${event}trisha\r\n　　${subject}${event}¡Que${event2}tengas${subject}un${event}gran\r\ día!${subject}${event}Soy trisha ¡Que tengas un gran día! ;
    document.getElementById("result").value = 
  result;
    
    auto_grow(document.getElementById("result"));
}