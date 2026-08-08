import  readline  from "node:readline";
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Ingrese la base: ",function(base){
    rl.question("Ingrese la altura. ",function(altura){
        base=Number(base)
        altura=Number(altura)
        const area=(base*altura)
        console.log(`El area total es: ${area}` )
        rl.close()
    })
} )
