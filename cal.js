let A = 0;
let B = 0; 
let aorb = 0;
let ope ;
let opes = ['+','-','x','/'];
let ans = 0;
let dim = 1;
let d = 0;
let any = 0;

function setdim(){
    if(d==1){
        clean();
        document.getElementById('answer').innerHTML = 'error';
    }
    else{
         d = 1;
        if(any == 0){
            document.getElementById('answer').innerHTML = '0.';
          any = 1;
        }
    else{
        document.getElementById('answer').innerHTML += '.';
    }
    }
   
    
}

function setvalue(x){
    

    if(aorb == 0){
        if(d == 0){
            A = addnum(A,x);
        }
        else{
            A = adddim(A,x);
        }
        if(A==0){
            if(document.getElementById('answer').innerHTML == '請輸入...'){
                document.getElementById('answer').innerHTML = '0';
            }
            else{
                document.getElementById('answer').innerHTML += '0';
            }
            
        }
        else{
            document.getElementById('answer').innerHTML = A;
        }
        
    }
    else{
        if(d == 0){
            B = addnum(B,x);
        }
        else{
            B = adddim(B,x);
        }
        if(B==0){
            document.getElementById('answer').innerHTML += '0';
        }
        else{
            document.getElementById('answer').innerHTML = B;
        }
    }
    any = 1;
};

function addnum(n,x){
    return n*10 + x;
}

function adddim(n,x){
    n = n + x/(10**dim);
    dim++;
    return n;
}

function setoperation(x){   
    ope = x;
    aorb = 1;
    d = 0;
    dim = 1;
    any = 0;
    document.getElementById('answer').innerHTML = opes[x];

    
}

function getans(){
    if(ope == 0){
        ans = A + B;
    }
    else if(ope == 1){
        ans = A - B;
    }
    else if(ope == 2){
        ans = A * B;
    }
    else if(ope == 3){
        ans = A / B;
    }
    display();
    console.log(7.9-8);
}

function display(){
    
    document.getElementById('answer').innerHTML = ans;
    aorb = 0;
    A = 0;
    B = 0;
    ans = 0;
    dim = 1;
    d = 0;
    any = 0;

}

function clean(){
    aorb = 0;
    A = 0;
    B = 0;
    ans = 0;
    dim = 1;
    d = 0;
    any = 0;
    document.getElementById('answer').innerHTML = '請輸入...';
}