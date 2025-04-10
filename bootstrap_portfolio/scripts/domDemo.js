console.log(document);

function testTheDom(){
    var nodes = document.getElementsByTagName("li");

    for(let node of nodes){
        console.log(node.innerHTML);
        console.log(node.textContent);
    }
    var checkingNode = document.getElementById("checkingBalance")
    console.log(checkingNode.textContent);
    //checkingNode.textContent="Changed";
    var balance = parseInt(checkingNode.textContent);
    balance=balance + 100;
    checkingNode.textContent=balance;
}
