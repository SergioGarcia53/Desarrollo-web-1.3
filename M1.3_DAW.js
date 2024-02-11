let nProcesos;
const args = process.argv;
if (args.length >= 3) {
    const dato = args[2];
    nProcesos=dato;
    nProcesos=parseInt(dato);
} else {
    console.log("No se ha ingresado ningún dato.");
}

const procesos= [];

const codigos= ["a=1+2","console.log('1+2')","console.log(a)","b=2+3","c=4+5","console.log('Hola mundo')","d=100-8"];
if(nProcesos!=0){
    iniciarSimulacion(nProcesos);
    simular();
}

function iniciarSimulacion(nProcesos){
    for(let i=0;i<nProcesos;i++)
    {
        let proceso= new Object();
        proceso.numero=i+1;
        proceso.codigo=[];
        
        let nCodigos=Math.floor(Math.random() * 7)+1;
        for(let j=0;j<nCodigos;j++)
        {
            let n=lineaCodigo();
            proceso.codigo.push(codigos[n]);
        }
        procesos.push(proceso);
    }
}

function lineaCodigo(){
    let x=Math.floor(Math.random() * 7);
    return x;
}

function simular(){
    for(let j=0;j<7;j++){
        for(let i=0;i<procesos.length;i++)
        {
        if((procesos[i].codigo[j])!=null){
            console.log("Proceso "+(i+1));
            console.log(procesos[i].codigo[j]);
        }
        
        }
    }
}
