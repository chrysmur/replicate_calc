
function doOperation (obj){
    if (obj.ops ==='+'){
        return {...obj,valone:Number(obj.valone)+Number(obj.res),newval:null,res:null}
    }
    if (obj.ops ==='x'){
        return {...obj,valone:Number(obj.valone)*Number(obj.res),newval:null,res:null}
    }
    if (obj.ops ==='/'){
        if(obj.res!==0 || obj.res!=null){
            return {...obj,valone:Number(obj.valone)/Number(obj.res),newval:null,res:null}
        }
        return{...obj,valone:"Error Div0",res:null,ops:null}
    }
    if (obj.ops ==='-'){
        return {...obj,valone:Number(obj.valone)-Number(obj.res),res:null,newval:null}
    }
  
}
export default doOperation