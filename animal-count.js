/* 0-10 mile a proti mile a 10 ti animal pawa jai
   10 - 20 mile porjnto proti mile a 50 ti animal pawa jai
   20 -    mile er por proti mile a 100 ti animal pawa jai.*/
// tahole koto mile gele kototi animals dekha jabe ber koro

function animalCount(miles) {

    animalDenseInFirstPortion = 10;
    animalDenseInSecondPortion = 50;
    animalDenseInThiredPortion = 100;
    
    if (miles <= 10) {
        return animals = miles * animalDenseInFirstPortion;
    } else if (miles <= 20) {
        animalinfirst10miles = 10 * animalDenseInFirstPortion;
        animalinFirst20miles = (miles - 10) * animalDenseInSecondPortion;
        return animals = animalinfirst10miles + animalinFirst20miles;
    } else {
        animalinfirst10miles = 10 * animalDenseInFirstPortion;
        animalinFirst20miles =  10 * animalDenseInSecondPortion;
        animalinMoreThan20miles = (miles - 20) * animalDenseInThiredPortion;
        return animals =animalinMoreThan20miles + animalinfirst10miles + animalinFirst20miles;
    }

}
console.log(animalCount(21))








   // solved with loop same things
/* function animalCount(mile) {

    let animal = 0;

    if (mile > 0) {
        let stop = 0;
        for (let i = mile; i > 0 && stop < 10; i--) {
            animal = animal + 10;
            stop++
        }
    }
    if (mile > 10) {
        let stop2 = 0;
        for (let i = mile - 10; i > 0 && stop2 < 10; i--) {
            animal = animal + 50;
            stop2++
        }
    }
    if (mile > 20) {
        for (let i = mile - 20; i > 0; i--) {
            animal = animal + 100
        }
    }
    return animal;
}

console.log(animalCount(11)); */
