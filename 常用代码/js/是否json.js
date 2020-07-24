const isJson = str => {
    if (typeof str === 'string') {
        try{
            let strObj = JSON.parse(str);
            if ( typeof strObj === 'object' && strObj) {
                return true;
            }
        }
        catch(e) {
            return false;
        }
    }
    return false
}

