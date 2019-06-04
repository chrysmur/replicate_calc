
function doOperation (obj){
    if (obj.ops ==='+'){
        obj.res= Number(obj.valone)+Number(obj.res)
        obj.newval=null
        obj.valone=obj.res
        obj.res=null
        return obj
    }
    if (obj.ops ==='x'){
        obj.res= Number(obj.valone)*Number(obj.res)
        obj.newval=null
        obj.valone=obj.res
        obj.res=null
        return obj
    }
    if (obj.ops ==='/'){
        if(obj.res!==0 || obj.res!=null){
            obj.res= Number(obj.valone)/Number(obj.res)
            obj.newval=null
            obj.valone=obj.res
            obj.res=null
            return obj
        }
        else {
            obj.valone=obj.res="Div0"
        }
    }
    if (obj.ops ==='-'){
        obj.res= Number(obj.valone)-Number(obj.res)
        obj.newval=null
        obj.valone=obj.res
        obj.res=null
        return obj
    }
    //marked for destruction
    if (obj.ops==='-/+'){
        if(obj.res){
            obj.res=(-1)*obj.res
            return obj
        }
        if(obj.valone){
            obj.valone=(-1)*obj.valone
            obj.res=null
            return obj
        }
    }
}
export default doOperation