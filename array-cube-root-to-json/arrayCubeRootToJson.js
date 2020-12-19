const arrayCubeRootToJson = arr => {
    if(!Array.isArray(arr)) throw new Error();
    arr.forEach(value => {
        if(!value) throw new Error();
        if(isNaN(value)) throw new Error();
    })

    return arr.reduce((result, item) => ({
        ...result,
        [item]: Math.cbrt(item)
      }), {})
    
};

module.exports =  arrayCubeRootToJson ;

