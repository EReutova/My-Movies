const Rating = (arr, string) => {
    const array = arr.map((item) => item[string]);

    let allData = [];
    array.map((item) => {
        return(
            item.map((el) => allData.push(el))
        )
    })

    let rating = {};

    for (let i = 0; i <=allData.length-1; i++){
        if(rating[allData[i]]){
            rating[allData[i]] +=1;
        }
        else {
            rating[allData[i]] = 1
        }
    }
    
    let sortedRating = Object.entries(rating).sort(([,a], [,b]) => b - a);
    let finalRating = sortedRating.map((element) => element[0])
    return finalRating;
}
export default Rating;
