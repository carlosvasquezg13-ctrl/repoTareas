import  readline  from "node:readline";
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question ("Ingrese la cantidad de horas", function(horas){
    horas= Number(horas)
    const minutos=(horas*60)
    console.log(`Su cantidad de horas en minutos son: ${minutos} minutos `)
    rl.close()
})