import cogoToast from 'cogo-toast'
class Validator{
    isEmpty(value){
       return value.length === 0 ?true : false
    }
    success(msg){
        cogoToast.success(msg)
    }
    errorToast(msg){
        cogoToast.error(msg)
    }
}

export const {isEmpty,success,errorToast} = new Validator() 