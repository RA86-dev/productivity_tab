function settings() {
    const style = document.body.style;
    const v = i()
    const a = document.getElementById('text_color').value;
    const c = document.getElementById('text_size').value + "px";
    style.backgroundColor = v;
    style.color = a;
    style.fontSize = c;

    

    
} 
function i() {
    const v = document.getElementById('bg_color').value;
    console.log(v);
    return v
}