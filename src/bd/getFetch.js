
const detalleProd = [

    {id:1,photoURL:'https://i.ibb.co/R3Xt1rD/nbrc.jpg', btn: "Detalles",marca:"New Balance", model:"RC Elite", ancho:"200", price:"U$S 200"},
    {id:2,photoURL:'https://i.ibb.co/mHfknGv/na.webp', btn: "Detalles",marca:"Nike", model:"Air Zoom Alphafly NEXT%", ancho:"197", price:"U$S 200"},
    {id:3,photoURL:'https://i.ibb.co/y0t0zXf/adidas-AA5.jpg', btn: "Detalles",marca:"Adidas", model:"Adizero Adios Pro", ancho:"225", price:"U$S 200"},
    {id:4,photoURL:'https://i.ibb.co/kqzWQgb/asics.jpg', btn: "Detalles",marca:"Asics", model:"Kayano 26", ancho:"225", price:"U$S 200"}
];


export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(detalleProd)
    }, 2000) 
       
})
 