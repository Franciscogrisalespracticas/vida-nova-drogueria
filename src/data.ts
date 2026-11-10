export type Product={id:number;slug:string;name:string;price:number;category:string;description:string;emoji:string;oldPrice?:number;};
export const products:Product[]=[
{id:1,slug:'shampoo-revitalizante',name:'Shampoo revitalizante 400 ml',price:24900,category:'Cabello',description:'Limpieza suave para una rutina de cuidado diario.',emoji:'🧴',oldPrice:29900},
{id:2,slug:'protector-solar',name:'Protector solar FPS 50+',price:48500,category:'Rostro',description:'Presentación cosmética para el cuidado cotidiano de la piel.',emoji:'☀️'},
{id:3,slug:'crema-hidratante',name:'Crema hidratante facial 200 ml',price:32900,category:'Rostro',description:'Textura ligera para una rutina de hidratación.',emoji:'🫧',oldPrice:38900},
{id:4,slug:'jabon-liquido',name:'Jabón líquido de manos 500 ml',price:18900,category:'Higiene',description:'Limpieza diaria con una agradable sensación de frescura.',emoji:'🧼'},
{id:5,slug:'gel-higiene',name:'Gel de higiene de manos 250 ml',price:12500,category:'Higiene',description:'Formato práctico para llevar en tu bolso.',emoji:'💧'},
{id:6,slug:'cepillo-dental',name:'Cepillo dental de cerdas suaves',price:9900,category:'Cuidado oral',description:'Cerdas suaves y mango ergonómico.',emoji:'🪥'},
{id:7,slug:'crema-dental',name:'Crema dental protección total 100 ml',price:14500,category:'Cuidado oral',description:'Complemento para tu rutina de higiene oral.',emoji:'🦷'},
{id:8,slug:'toallitas-humedas',name:'Toallitas húmedas 80 unidades',price:16900,category:'Higiene',description:'Formato cómodo para el cuidado personal.',emoji:'🌿'},
{id:9,slug:'balsamo-labial',name:'Bálsamo labial hidratante',price:11900,category:'Rostro',description:'Cuidado de labios en presentación compacta.',emoji:'💚',oldPrice:15900},
{id:10,slug:'kit-cuidado',name:'Kit de cuidado personal',price:59900,category:'Bienestar',description:'Selección de esenciales para una rutina personal.',emoji:'🎁',oldPrice:69900}
];
export const money=(n:number)=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
export const business={name:'VIDA NOVA Droguería',address:'Calle 18 # 7-42, Pereira, Risaralda',email:'contacto@vidanova.example',whatsapp:'',hours:['Lunes a sábado · 8:00 a. m. a 8:00 p. m.','Domingos y festivos · 9:00 a. m. a 5:00 p. m.']};
