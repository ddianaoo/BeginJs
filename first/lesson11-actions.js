var count=0;

function onclickbutton(my_tag) {
    console.log(my_tag.innerHTML);
    count+=1;
    my_tag.innerHTML = 'You clicked '+ count + ' times';
    //my_tag.style.background = "green";
    my_tag.style.cssText = "border-radius:5px; font-size:20px; color:red";
    //alert('hi');
    console.log(my_tag.name);
}

function onInput(obj) {
    if (obj.value=="иди нахуй") {
        alert("Сам иди");
    }
    console.log(obj.value);    
}