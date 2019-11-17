/*
冒泡排序：
    ascendingSort
    descendingSort
    descendSort
*/
// 快速排序
//从小到大排序
function ascendingSort(data){
    if(data){
        let temp=0;
        for (let i=data.length;i>0;i--) {
            for (let j = 0; j<i-1; j++) {
                if(data[j]>data[j+1]){
                    temp=data[j];
                    data[j]=data[j+1];
                    data[j+1]=temp;
                }
            }
        }
    }
    return data; 
}
//从大到小排序
function descendingSort(data){
    data=descendingSort(data);
    if(data){
        data.revert();
    }
    return data;
}

// 降序排列
function descendSort(data){
    if(data){
        let temp=0;
        for (let i=data.length;i>0;i--) {
            for (let j = 0; j<i-1; j++) {
                if(data[j]<data[j+1]){
                    temp=data[j];
                    data[j]=data[j+1];
                    data[j+1]=temp;
                }
            }
        }
    }
    return data;
}

//***************************************************** */
// 找出数组中第k大的数组出现多少次，比如数组【1，2，4，4，3，5】第二大的数字是4，出现两次，所以返回2
function findArr(array){
   let obj={};
   let keys=[];
   for (let i = 0; i <=array.length-1; i++) {
       if(obj[i]){
            obj[i]=obj[i]+1;
       }else{
            obj[i]=1;
            keys.push(i);
       }
   }
   let maxNum=Math.max(...keys);
   return {
     count:obj[maxNum],
     num:maxNum
   };
}