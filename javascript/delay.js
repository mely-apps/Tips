const delay  = (times)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },times)
    })
}


const delayForFn = (fn, times)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(fn())
        },times)
    })
}

const callApi = ()=>{

    // await axios
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                code:200,
                data:'success'
            })
        },1000)
    })
}


async function main(){
    console.time('main')
    await delayForFn(callApi, 1500)
    console.timeEnd('main')

}

main().then((response)=> {
    console.log('response');
})