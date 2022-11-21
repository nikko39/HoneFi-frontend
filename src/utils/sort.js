async function sorted(data,value){
    console.log(value)
    if ( value == 'Create'){
        let data_ = await data.sort(function(a,b) { return b.dropnum - a.dropnum})
        return data_
    }
    else if ( value == 'Start'){
        let data_ = await data.sort(function(a,b) { return a.dropstart - b.dropstart})
        return data_
    }
    else if ( value == 'Price') {
        let data_ = await data.sort(function(a,b) { return parseInt(a.price) - parseInt(b.price)})
        return data_
    }
}
