const { Product, Categories} = require("./models/index")

//-----------------------------CATEGORIAS-------------------------
/*const categoria1 = Categoria.create({

    tipo: "Espumantes"
})
const categoria2 = Categoria.create({

    tipo: "Dulce"
})
const categoria3 = Categoria.create({

    tipo: "Amargo"
})
const categoria4 = Categoria.create({

    tipo: "Carton"
})*/


//-----------------------------PRODUCTOS-------------------------



Product.create({
    name: "Ghost Of Tsushima",
    price: 1050,
    cantidad: 0,
    stock: 100,
    description: "Tendra que dominar un nuevo estilo de lucha el camino del fantasma",
    imageOne: "https://dixgamer.com/wp-content/uploads/2020/06/ghost-of-tsushima-20203517513223_1-330x420.jpg",
    imageDos: "https://as.com/meristation/imagenes/2019/12/15/noticias/1576420902_859512_1576421107_noticia_normal.jpg"
})

Product.create({
    name: "eFootball PES 2020",
    price: 1332,
    cantidad: 0,
    stock: 100,
    description: "Futbol",
    imageOne: "https://d26lpennugtm8s.cloudfront.net/stores/427/682/products/pes-20201-f38edf6d6f93ae4e2a15619952313656-640-0.jpg",
    imageDos: "https://juegosuruguay.com/wp-content/uploads/2019/11/Efootball-Pro-evolution-soccer-Pes-2020-MK11-Fifa-20-COD-MW-Days-Gone-NFS-Heat-juegosuruguay-5.jpg"
    

})

Product.create({
    name: "Resident Evil",
    price: 1807,
    cantidad: 0,
    stock: 100,
    description: "Juego de Zombies",
    imageOne: "https://d26lpennugtm8s.cloudfront.net/stores/082/436/products/re3-remake11-2a96ea4010fa55b81815760773367606-640-0.jpg",
    imageDos: "https://depor.com/resizer/kkPXaoLA4nKtdAAtkUXH9Mgz6X4=/1200x800/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UYQQHBLN75GJNLEGZBUVAO4DJY.jpg"
    

})

Product.create({
    name: "WWE 2K18",
    price: 1522,
    cantidad: 0,
    stock: 100,
    description: "Lucha Libre",
    imageOne: "https://http2.mlstatic.com/wwe-2k18-ps4-digital-D_NQ_NP_747549-MLA29405261801_022019-F.jpg",
    imageDos: "https://i.ytimg.com/vi/6iqznZxOogc/maxresdefault.jpg"
})

Product.create({
    name: "God of War",
    price: 1141,
    cantidad: 0,
    stock: 100,
    description: "Han pasado años desde que Kratos tomó su venganza contra los Dioses Olímpicos",
    imageOne: "https://http2.mlstatic.com/god-of-war-ps4-2018-digital-espanol-jugas-en-tu-usuario-D_NQ_NP_718581-MLA28723898001_112018-F.jpg",
    imageDos: "https://www.roastbrief.com.mx/wp-content/uploads/2018/08/IMG_6321-780x405.jpg"
    

})
Product.create({
    name: "Need for Speed Payback",
    price: 1046,
    cantidad: 0,
    stock: 100,
    description: "Carrera de Mundo",
    imageOne: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/06/NeedForSpeedPayback_caratula.jpg?itok=3Q-CfGNk",
    imageDos: "https://microsofters.com/wp-content/uploads/2018/06/need-for-speed-payback-e3-2017-043.jpg"
    

})

Product.create({
    name: "Call of Duty WW2",
    price: 2100,
    cantidad: 0,
    stock: 100,
    description: "Juego de Segunda Guerra Mundial",
    imageOne: "https://dixgamer.com/wp-content/uploads/2017/07/call-of-duty-ww2-3.png",
    imageDos: "https://i.blogs.es/292653/duty0/1366_2000.jpg"
    

})

Product.create({
    name: "The Sims 4",
    price: 666,
    cantidad: 0,
    stock: 100,
    description: "Simulación Social y de Vida",
    imageOne: "https://http2.mlstatic.com/the-sims-4-ps4-fisico-nuevo-xstation--D_NQ_NP_793238-MLA32778212187_112019-F.jpg",
    imageDos: "https://http2.mlstatic.com/the-sims-4-ps4-oferta-digital-original-en-minutos-2-D_NQ_NP_664203-MLA32980327486_112019-F.jpg"
    

})

Product.create({
    name: "Mortal Kombat X",
    price: 1000,
    cantidad: 0,
    stock: 100,
    description: "Juego de Pelea",
    imageOne: "https://i11b.3djuegos.com/juegos/11039/mortal_kombat_x/fotos/ficha/mortal_kombat_x-2543177.jpg",
    imageDos: "https://lh3.googleusercontent.com/proxy/Ft-kPZYXzNthRMs8DTIfTrabImmSwu3E0toL6EFCSJnsAufuiOEr8Ojh4DJXtLmLWKI7tNh0-9NlSdvhv-3YCPZpJhF7hkb3ammUHPhukvDKfMcVVh4a3w5wIOZJCk6wk_gwOB3WJpAS0s1hIazz7DapLrLhbAU"
    

})

Product.create({
    name: "NBA 2K20",
    price: 1920,
    cantidad: 0,
    stock: 100,
    description: "Simulación de Baloncesto",
    imageOne: "",
    imageDos: "https://store-images.s-microsoft.com/image/apps.39370.13893532245614132.349b81ac-84df-4a0f-90fc-4faeba0f6369.c43c8d93-7eab-430c-83e8-a629450d4806?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg"
    

})
Product.create({
    name: "GTA V",
    price: 754,
    cantidad: 0,
    stock: 100,
    description: "El juego está ambientado en la ciudad ficticia de Los Santos",
    imageOne: "https://d26lpennugtm8s.cloudfront.net/stores/082/436/products/gta-v-premium-edition-ps4-fisico-d_nq_np_630465-mla31582264508_072019-f1-523c4ea142d9a2bc2815774828545066-1024-1024.jpg",
    imageDos: "https://phantom-elmundo.unidadeditorial.es/19b8ade749eb6ca78e51ee6d656a0f31/crop/0x123/1920x1403/resize/746/f/jpg/assets/multimedia/imagenes/2020/05/14/15894675954242.jpg"
    

})

Product.create({
    name: "Assassins Creed 4 Black Flag",
    price: 1721,
    cantidad: 0,
    stock: 100,
    description: "Se le describe como el azote de los mares, un hábil pirata y asesino al cual admira hasta el mismísimo Barbanegra",
    imageOne: "https://uphobbies.com/wp-content/uploads/2020/02/Assassins-Creed-IV-Black-Flag.jpg",
    imageDos: "https://steamcdn-a.akamaihd.net/steam/apps/260470/ss_c2ad7f22e27b8ffab2a896e543a82fc8f6e9a1a7.1920x1080.jpg?t=1455812806"
    

})


// Promise.all([producto1, producto2, producto3, producto4, producto5, producto6 , producto7 , producto8 , producto9 , producto10, producto11 , producto12])
// .then((valores) => {
//     console.log(valores)
// })