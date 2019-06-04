import doOperation from './do_operation';

function callOp(obj){
    obj=doOperation(obj);
    obj.ops=obj.newval;
    return obj;
}
function handleOperaters(obj){
    if(!obj.valone){
        obj.ops=obj.newval
        obj.valone=obj.res
        obj.res=null
    }
    else if(obj.valone && obj.res){
        //for these to exist there must be an operation sign, so we do it first and reset ops
        obj=callOp(obj)
        obj.ops=obj.newval
        
    }
    else {
        obj.ops=obj.newval
        obj.res=null
    }
    return obj
}
function handleZero(obj){
    if(obj.res){
        obj.res=obj.res+obj.newval
        obj.newval=null
    }
    else{
        obj.newval=null
    }
    return obj
}
function handlePoint(obj){
    if(obj.res){
        if(obj.res.includes('.')){
            return obj
        }
        obj.res=obj.res+'.'
    }
    else {
        obj.res="0."
    }
    return obj
}
function handleNumbers(obj){
    if(obj.res){
        obj.res=obj.res+obj.newval
        }
        else {
            obj.res=obj.newval
        }
        return obj
}
function handleEqual(obj){
    if(!obj.valone||!obj.res){
        obj.valone = obj.res ? obj.res:obj.valone
    }
    else if(obj.valone && obj.res){
        doOperation(obj)
    }
}
function handleNegative(obj){
    obj.valone=(obj.res? -1*obj.res:-1*obj.valone )
    obj.res=null
    return obj
}
function Calculate(obj){
    switch(obj.newval){
        case "AC":
            for(let item in obj){
                obj[item]=null
            }
            break
        case "Del":
            if(obj.res){
                obj.res=obj.res.slice(0,-1)
                obj.newval=null
            } break;  
        case "+":
            handleOperaters(obj)            
            break
        case "-":
            handleOperaters(obj)            
            break
        case "x":
            handleOperaters(obj)            
            break
        case "/":
            handleOperaters(obj)            
            break
        case "-/+":
            handleNegative(obj)
            break
        case "=":
            handleEqual(obj)
            break
        case "0":
            handleZero(obj)
            break
        case ".":
            handlePoint(obj)
            break
        default:
            handleNumbers(obj)
            break
    }
    obj.newval=null
    return obj
   
}
export default Calculate