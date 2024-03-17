function basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize){

    if(products ==null){
        return;
    }

    /****************Filtering--> hiding products**********************/ 
    let filteredProductsArr = products;
    
    if(searchTerm!=""){  
    filteredProductsArr=filteredProductsArr.filter((product)=>{
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle=product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
    })
    }
    /******************sorting--->re arranging**********************************/ 
    let filteredSortedArr=filteredProductsArr;
    if(sortDir!=0){
        //increasing
            if(sortDir==1){
                filteredSortedArr=filteredSortedArr.sort(inComparator)
            }   
            else
        //decreasing
            {
                filteredSortedArr=filteredSortedArr.sort(decComparator)
            }
     
    }

    /********************categorization*************************/ 
    let filteredSortedGroupByArr = filteredSortedArr;

    if(currCategory!="All categories"){
        filteredSortedGroupByArr = filteredSortedGroupByArr.filter((product)=> product.category==currCategory)
    }

    // comparator functions
    function inComparator(product1,product2){
        if(product1.price > product2.price){
                return 1
        }else{
            return -1
        }
    }
    function decComparator(product1,product2){
        if(product1.price < product2.price){
            return 1
        }else{
            return -1
        }
    }

    /************************Pagination *********************/
    let sidx = (pageNum - 1) * pageSize;
    let eidx = sidx + pageSize;
    filteredSortedgroupByArr = filteredSortedgroupByArr.slice(sidx, eidx);
    console.log(filteredSortedArr)
    
    return { filteredSortedgroupByArr };

}

export default basicOps;