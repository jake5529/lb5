function f() {
    let M=4;
    let N=3
    let arr=[[1,2,7],[2,8,10],[17,1,9],[10,11,12]]

    let count1 = 0;
    let summ=0;
    for (let i=0; i<M;i++){
        for (let j=0; j<N;j++){
            count1++;
            summ+=arr[i][j];
        };
    };
    let sr = summ/count1;
    console.log(sr);
    let count_finish=0
    for (let i=0; i<M;i++){
        for (let j=0; j<N;j++){
            if (arr[i][j] > sr){
                count_finish++
            };
        };
    };
    console.log(count_finish)
}
f()
