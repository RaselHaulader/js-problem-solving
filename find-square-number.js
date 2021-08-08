

//প্রদত্ত সংখ্যার মধ্যবর্তী সকল বর্গ্মুল নির্ণয়।
//এখানে ১-n পর্যন্ত সকল বর্গ্মুল  সংখ্যা বের করা হলো।


let n = 64;

for (let i = 0; i <= n; i++) {
    let sqr = Math.sqrt(i);
    let sqrFloor = Math.floor(sqr);
    let check = sqr / sqrFloor;
    if (check == 1) {
        console.log(i);
    };
};



//another way

for (let i = 1; i <= n; i++) {
    let check = i * i ;
    if(check <= n){
         console.log(check);
    };
};

