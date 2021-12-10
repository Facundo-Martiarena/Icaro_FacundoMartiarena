
export const detalleProd = [{

            id:1,
            photoURL:'https://i.ibb.co/R3Xt1rD/nbrc.jpg', 
            btn: "Detalles",
            marca:"New Balance", 
            model:"RC Elite", 
            ancho:"200", 
            price:"200", 
            stock:"5", 
            categoria:"hombre"
    },
    {
            id:2,
            photoURL:'https://i.ibb.co/mHfknGv/na.webp', 
            btn: "Detalles",
            marca:"Nike", 
            model:"Air Zoom Alphafly NEXT%", 
            ancho:"197", 
            price:"200",
            stock:"5",
            categoria:"hombre"
    },
    {
            id:3,
            photoURL:'https://i.ibb.co/y0t0zXf/adidas-AA5.jpg', 
            btn: "Detalles",
            marca:"Adidas", 
            model:"Adizero Adios Pro", 
            ancho:"225", 
            price:"200",
            stock:"5", 
            categoria:"mujer"
    },
    {
            id:4,
            photoURL:'https://i.ibb.co/kqzWQgb/asics.jpg', 
            btn: "Detalles",
            marca:"Asics", 
            model:"Kayano 26", 
            ancho:"225", 
            price:"200",
            stock:"5", 
            categoria:"mujer"
    }
]



export const fetch = new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(detalleProd)
        }, 2000) 
           
    })


export const itemPromise = new Promise((res, reject) => {
        setTimeout(() => {
          
                res(detalleProd);
          
        }, 2000);
     
      })

  
  
  
  

 