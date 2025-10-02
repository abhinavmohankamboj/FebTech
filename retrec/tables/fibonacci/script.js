function generate_fibonacci(){
    let n=document.getElementById("number").value;
    let n1=0, n2=1,nextTerm;
    let series=[];
    for(let i=1;i<=n;i++){
        series.push(n1);
        nextTerm=n1+n2;
        n1=n2;
        n2=nextTerm;
    }
    document.getElementById("result").innerHTML="fibonacci series:<br>"+ series.join(",");
}