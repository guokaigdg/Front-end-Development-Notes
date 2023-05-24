/*
手写
模拟红绿灯
红灯3秒，绿灯2秒，黄灯1s
如此循环（async await）
*/

async function traffic(){
  const _fn = function(light,sec){
    console.log(`${new Date().getMinutes()}:${new Date().getSeconds()}, ${light}亮...`)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },sec * 1000)
    })
  }

  while(true){
    await _fn('红灯',3)
    await _fn('绿灯',2)
    await _fn('黄灯',1)
  }
}

traffic()