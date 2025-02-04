
export async function Guardar(url,body){

    const parametros ={
        method: 'POST',
        body: JSON.stringify(body)
        
    }
    const res =  await fetch(url,parametros)
    if(res){
        const resJson = res.json()
        return resJson
    }
    
}