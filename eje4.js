import  readline  from "node:readline";
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question ("Indique el nombre de el producto",function(nombre){
    rl.question("¿Cauntos productos desea comprar?",function(cantidad){
        rl.question("¿Cual es su precion por unidad?",function(precio){
            cantidad=Number(cantidad)
            precio=Number(precio)
            const totalP=(precio*cantidad)
            console.log(`=Resumen de compra=|Producto=${nombre}|Cantidad de productos=${cantidad}|PrecioxUnidad=${precio}|Total a pagar ${totalP}$|`)
            rl.close()
        })
    })
})
