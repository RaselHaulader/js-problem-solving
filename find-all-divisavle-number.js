
/* 
এমন একটি ফাংশন নির্ণয় কর যা, যে কোন সংখ্যার সকল গুননীয়ক নির্ণয় করে।
*/


let n = 99;
for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    };
};