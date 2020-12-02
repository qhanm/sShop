
function getError(arrError, attribute)
{
    _.forEach(arrError, function (value, key){
        if(_.has(value, attribute) === true){
            return _.get(Object.values(value), [key, 0]);
        }
    })

    return null;
}


export {
    getError
}
