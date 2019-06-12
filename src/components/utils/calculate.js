import doOperation from './do_operation';

function callOp(obj){
    obj=doOperation(obj);
    //obj.ops=obj.newval;
    return obj;
}
function handleOperaters(obj){
    if(!obj.valone){
        if(obj.res){
            return {...obj,ops:obj.newval,valone:obj.res,res:null}
        }
        return{...obj,newval:null}
    }
    else if(obj.valone && obj.res){
        return {...callOp(obj), ops:obj.newval,newval:null}
    }
    return{...obj,ops:obj.newval,res:null}
}
function handleZero(obj){
    if(obj.res){
        return {...obj,res:obj.res+obj.newval,newval:null}
    }
    return {...obj,newval:null}
}
function handlePoint(obj){
    if(obj.res){
        if(obj.res.includes('.')){
            return obj
        }
        return {...obj, res:obj.res+'.',newval:null}
    }
    return{...obj,res:"0.",newval:null}    
}
function handleNumbers(obj){
    if(obj.res){        
        return{...obj,res:obj.res+obj.newval,newval:null}
        }
        return{...obj,res:obj.newval,newval:null}
     /*    
    if(obj.ops){
        callOp(obj)
        return{...obj,res:obj.newval}
    } */
}
    
function handleEqual(obj){
    if(!obj.valone||!obj.res){
        return{...obj,valone:obj.res ? obj.res:obj.valone,newval:null,ops:null}
    }
    else if(obj.valone && obj.res){
        return {...doOperation(obj),ops:null}
        
    }
}
function handleNegative(obj){
    return{...obj,res:(obj.res? -1*obj.res:-1*obj.valone ),valone:obj.res,newval:null}
}
function Calculate(obj){
    switch(obj.newval){
        case "AC":
            Object.keys(obj).forEach((k)=>obj[k]=null)
            return {...obj}
        case "Del":
            if(obj.res){
                return {...obj,res:obj.res.toString().slice(0,-1)}
            }
            return obj;  
        case "+":
        case "-":
        case "x":
        case "/":
            return(handleOperaters(obj))           
        case "-/+":
            return(handleNegative(obj))
        case "=":
            return(handleEqual(obj))
        case "0":
            return(handleZero(obj))
        case ".":
            return(handlePoint(obj))
        default:
            return(handleNumbers(obj))
    }
}
export default Calculate