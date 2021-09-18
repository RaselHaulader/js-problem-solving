/* ==============================
---Convert seerToMon---
============================= */
// its a function which convert seer to mon
function seerToMon(seer) {
    //error validation of negative numbers and string or empty call
    if (seer <= 0) {
    return 'Please Give a Positive Number, Thank You'
    } else if (seer == undefined || typeof seer == "string") {
    return 'Please Give a number value as seer in arguments , Thank You'
    };
    //convert seer to mon
    let mon = seer / 40;
    return mon;
    };
    /* ========================================
    ---Calculate Total sales of a shop---
    ========================================= */
    //this function calculate total sales of a shop
    function totalSales(shirt, pant, shoes) {
    // error validation
    if (shirt < 0 || pant < 0 || shoes < 0) {
    return "Please Don't use any negative value, Thank You."
    } else if (shirt == undefined || pant == undefined || shoes == undefined) {
    return "Please Give (shirt,pants,shoes) all kind of items sales quantity , Thank You"
    }
    //price per piece
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoesPrice = 500;
    // calculate total per item
    let totalPriceOfShirt = shirt * shirtPrice;
    let totalPriceOfPant = pant * pantPrice;
    let totalPriceOfShoes = shoes * shoesPrice;
    // total sales of all products
    let totalSales = totalPriceOfShirt + totalPriceOfPant + totalPriceOfShoes;
    return totalSales;
    };
    /* ========================================
    ---Calculate delivery Cost---
    ========================================= */
    //this function calculate delivery cost
    function deliveryCost(quantity) {
    // error validation
    if (quantity <= 0) {
    return 'Please Give a Positive Numbers of quantity, Thank You'
    } else if (quantity == undefined || typeof quantity == "string") {
    return 'Please Give a number value as items quantity in arguments, Thank You'
    };
    // delivery Cost of per items according to quantity range
    let CostForFirst100 = 100;
    let CostForSecond100 = 80;
    let CostForMoreThan200 = 50;
    if (quantity <= 100) {
    //for 1-100 items cost
    let totalCost = quantity * CostForFirst100;
    return totalCost;
    } else if (quantity <= 200) {
    //for 1-100 items cost
    let totalCostForFirst100 = 100 * CostForFirst100;
    let itemsMoreThan100 = quantity - 100;
    //for 101-200 items cost
    let totalCostForSecond100 = itemsMoreThan100 * CostForSecond100; //100-200 items cost
    // total cost
    let totalCost = totalCostForFirst100 + totalCostForSecond100
    return totalCost;
    } else if (quantity > 200) {
    //for 1-100 items cost
    let totalCostForFirst100 = 100 * CostForFirst100;
    //for 101-200 items cost
    let totalCostForSecond100 = 100 * CostForSecond100;
    let itemsMoreThan200 = quantity - 200;
    //cost for more than 200
    let totalCostForMoreThan200 = itemsMoreThan200 * CostForMoreThan200;
    // total cost
    let totalCost = totalCostForFirst100 + totalCostForSecond100 + totalCostForMoreThan200;
    return totalCost;
    };
    };
    /* ========================================
    ---Find Perfect Friend---
    ========================================= */
    //find a name whose name have 5 latter;
    function perfectFriend(friends){
    //error validation
    if(typeof friends == 'string' || typeof friends == 'number' || friends == undefined ){
    return "Please provide an array which contains friends name, Thank You."
    }
    // for of loop for to check and return 5 letters friend name
    for(const friend of friends){
    if (friend.length == 5 ){
    let perfectFriend = friend;
    return perfectFriend;
    };
    };
    };
    // array of friends
    let friends = ['russel', 'pial', 'faruk', 'shourov'];
    //check all function
    console.log(seerToMon(120));
    console.log(totalSales(1,2,3));
    console.log(deliveryCost(101))
    console.log(perfectFriend(friends));