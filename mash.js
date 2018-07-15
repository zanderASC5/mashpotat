// function mash()
// {
//     return 'house';
// }
// console.log(mash());

function gethome() {

    const home = ['mansion','apartment','shak','house'];
    const rh= Math.random();
    const mrh= rh *3;
    const fin = Math.floor(mrh);
    return home[fin];
}
//console.log(gethome());

function getchilds() {
    const num = Math.random();
    const kids = Math.floor(num*100);
    return kids;
}

function getCar() {
    
    const Car = ['Red Ferrari for Freee','Landspeeder','Hoverboard','Delorean'];
    const rc= Math.random();
    const mrc= rc *3;
    const final = Math.floor(mrc);
    return Car[final];
}

if (process.argv.length >= 5){
    console.log('you will live in a '+process.argv[2]+' Drive a '+process.argv[3]+' and you will have ' +process.argv[4]+' kids!')
}else if (process.argv.length ==4){
    console.log('you will live in a '+process.argv[2]+' Drive a '+process.argv[3]+' and you will have ' +getchilds()+' kids!')
}else if (process.argv.length == 3){
    console.log('you will live in a '+process.argv[2]+' Drive a '+getCar()+' and you will have ' +getchilds()+' kids!')
}else {
    console.log('you will live in a '+gethome()+' Drive a '+getCar()+' and you will have ' +getchilds()+' kids!')
}