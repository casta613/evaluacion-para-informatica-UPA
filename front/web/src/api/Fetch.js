
export async function Guardar(url,body){

    const parametros ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(body)
        
    }
    const res =  await fetch(url,parametros)
    if(res){
        const resJson = res.json()
        return resJson
    }
    
}

export async function reporte(url){
    const parametros ={
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await fetch(url)

    if(res){
        const resJson = res.json()
        return resJson
    }
}