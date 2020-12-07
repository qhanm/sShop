function onlyUnique(value, index, self){
    return self.indexOf(value) === index;
}

function treeData(arrData, parent_id = 0, char = '', result = [])
{

    arrData.forEach((data, key) => {
        if(data.parent_id == parent_id){
            result[data.id] = data;
            arrData.splice(key, 1);
            treeData(arrData, data.id, char + '--', result);
        }
    });

    return result;
}

const ArrayHelper = {
    onlyUnique,
    treeData
}

export default ArrayHelper;


