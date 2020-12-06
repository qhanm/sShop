function getError(arrError, attribute)
{
	let result = null;
	arrError.forEach((value, key) => {
		if(value.hasOwnProperty(attribute)){
			const { [attribute]: prop  } = value
			result = prop[0];
			return true;
		}
	})
	return result;
	// return "email faild";
 //    _.forEach(arrError, function (value, key){
 //        if(_.has(value, attribute) === true){
 //            return _.get(Object.values(value), [key, 0]);
 //        }
 //    })

 //    return null;
}


export {
    getError
}
