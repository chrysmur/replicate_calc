import doOperation from './do_operation'
function Calculate(obj){
    //total stores the results of an operation or the content pressed waiting for operation
    //if buttin is pressed, we take the value and store it in total so that it is displayed
    //obj.res=numbers entered, obj.valone= reuslts of calculation, obj,
    if(obj.newval){
        //if you click equal sign twice, nothing happens
        if(obj.ops==='='&& obj.newval==='='){
            return obj
        }
        //reset the calculator
        if(obj.newval==='AC'){
            obj.res=null;
            obj.newval=null;
            obj.valone=null;
            obj.ops=null;
            return obj
        }
        //delete the numbers entered, but cannot delete results of a calculation
        if (obj.newval==='Del'){
            //check if res exists
            if(obj.res)
                {
                obj.res=obj.res.slice(0,-1)
                obj.newval=null
                return obj
                }
            else{
                obj.res=null
                return obj
            }
        }
        if(obj.newval==='+'){              
            if(!obj.valone && obj.res){
                obj.ops = obj.newval;
                obj.valone=obj.res;
                obj.res=null
                return obj
            }
            if(obj.valone && obj.res){
                obj = doOperation(obj);
                obj.ops = obj.newval;
                return obj

            }
            if(obj.valone && !obj.res){
                obj.ops = obj.newval;
                obj.res=null
                return obj
            }
        }
        if(obj.newval==='x'){  
            if(!obj.valone && obj.res){
                obj.ops = obj.newval;
                obj.valone=obj.res;
                obj.res=null
                return obj
            }
            if(obj.valone && obj.res){
                obj = doOperation(obj);
                obj.ops = obj.newval;
                return obj
            }
            if(obj.valone && !obj.res){
                obj.ops = obj.newval;
                obj.res=null
                return obj
            }
        }
        if(obj.newval==='-'){  
            if(!obj.valone && obj.res){
                obj.ops = obj.newval;
                obj.valone=obj.res;
                obj.res=null
                return obj
            }
            if(obj.valone && obj.res){
                obj=doOperation(obj);
                obj.ops = obj.newval;
                return obj
            }
            if(obj.valone && !obj.res){
                obj.ops = obj.newval;
                obj.res=null
                return obj
            }
        }
        if(obj.newval==='/'){  
            if(!obj.valone && obj.res){
                obj.ops = obj.newval;
                obj.valone=obj.res;
                obj.res=null
                return obj
            }
            if(obj.valone && obj.res){
                obj = doOperation(obj);
                obj.ops = obj.newval;
                return obj
            }
            if(obj.valone &&!obj.res){
                obj.ops = obj.newval;
                obj.res=null
                return obj
            }
        }
        //negate
        if(obj.newval==='-/+'){
            obj.ops='-/+';
            return(doOperation(obj))

        }
        else if(obj.newval==='='){
            if(!obj.valone || !obj.res){
                return obj
            }
            else if(obj.ops){ 
                obj=doOperation(obj)
                return obj
                }            
            else{
                return obj
            }    
        }
        else if(obj.newval==='0'){
            if (!obj.res){
                obj.newval=null
                return obj
            }
            else{
                obj.res=obj.res+obj.newval
                obj.newval=null
                return obj
            }
        }
        else if(obj.newval==='.'){
            if (!obj.res){
                obj.res='0.'
                obj.newval=null
                return obj
            }
            if(obj.res.includes('.')){
                return obj
            }
            else{
                obj.res= obj.res + "."
                obj.newval=null
                return obj
            }
        }
        else if(!obj.res){
                obj.res=obj.newval
                return obj
            }
            else {
                obj.res=obj.res+obj.newval                
                return obj
                }             
        }
    else if(obj.valone===obj.res){
        obj.res=null;
        return obj
    }
    if(obj.res===obj.valone){
        if(obj.newval){
            obj.res=obj.newval
        }
    }
    if(obj.res && obj.newval){
        if (obj.newval==='='){
            return (doOperation(obj))
            }
            else {
                return obj
            }        
    }
   if(obj.res && obj.newval){
       obj.res= (obj.res+obj.newval)
       return obj
   }
   if(obj.res && obj.ops){
       
   }
   else{
       obj.res=null
       return obj
   }
}

export default Calculate