/* ===================================
   SCRATBOT AI
   CHATBOT FRONTEND
=================================== */


document.addEventListener("DOMContentLoaded",()=>{


const chatbotHTML = `

<button class="chatbot-button">
🤖
</button>


<div class="chatbot-container">


<div class="chatbot-header">

<div>

<div class="chatbot-title">
🤖 ScratBot AI
</div>

<div class="chatbot-status">
● Online
</div>

</div>

</div>



<div class="chatbot-messages">


<div class="chat-message bot">

Hola 👋

Soy ScratBot AI.

¿Cómo puedo ayudarte hoy?

<br><br>

<button class="quick-option">
🌐 Página Web
</button>

<button class="quick-option">
🤖 Inteligencia Artificial
</button>

<button class="quick-option">
💬 Cotización
</button>

</div>


</div>



<div class="chatbot-input">

<input 
type="text"
placeholder="Escribe tu mensaje..."
>


<button>
➤
</button>


</div>


</div>

`;



document.body.insertAdjacentHTML(
"beforeend",
chatbotHTML
);



const button =
document.querySelector(".chatbot-button");


const container =
document.querySelector(".chatbot-container");


const input =
document.querySelector(".chatbot-input input");


const send =
document.querySelector(".chatbot-input button");


const messages =
document.querySelector(".chatbot-messages");



button.addEventListener(
"click",
()=>{

container.classList.toggle(
"active"
);

});





function addMessage(text,type){


const div=document.createElement(
"div"
);


div.className=
`chat-message ${type}`;


div.textContent=text;


messages.appendChild(div);


messages.scrollTop=
messages.scrollHeight;


}





async function botReply(message){


message = message.toLowerCase();


let response = null;



const faq = [

{
keywords:["servicios","que hacen","qué hacen"],
answer:"En Scratloop Digital desarrollamos páginas web, automatizaciones, chatbots con inteligencia artificial e integraciones digitales."
},

{
keywords:["web","pagina","página","sitio"],
answer:"Creamos páginas web modernas, rápidas y optimizadas para ayudarte a crecer."
},

{
keywords:["chatbot","bot","asistente"],
answer:"Nuestro ScratBot AI puede atender clientes, responder preguntas y ayudarte a generar oportunidades de venta."
},

{
keywords:["automatizacion","automatización"],
answer:"Creamos automatizaciones para reducir tareas manuales y mejorar procesos."
},

{
keywords:["whatsapp"],
answer:"Podemos conectar tu sitio web con WhatsApp para facilitar la comunicación con tus clientes."
}

];



faq.forEach(item=>{


item.keywords.forEach(word=>{


if(message.includes(word)){

response=item.answer;

}


});


});



if(!response){


response =
"Me gustaría ayudarte mejor. ¿Podrías contarme más sobre lo que necesitas para tu negocio?";


}



setTimeout(()=>{


addMessage(
response,
"bot"
);


},700);



}


let response =
"Gracias por escribirnos. Un especialista de Scratloop Digital puede ayudarte.";



message=message.toLowerCase();



if(message.includes("web")){

response=
"Podemos crear una página web moderna, rápida y optimizada para tu negocio 🚀";

}


if(message.includes("ia") ||
message.includes("inteligencia")){

response=
"Desarrollamos asistentes inteligentes, automatizaciones y soluciones con IA 🤖";

}


if(message.includes("precio") ||
message.includes("cotización")){

response=
"Podemos preparar una propuesta personalizada según tus necesidades.";

}



setTimeout(()=>{

addMessage(
response,
"bot"
);

},700);



}




function sendMessage(){


const text=input.value.trim();


if(!text)return;



addMessage(
text,
"user"
);


input.value="";


botReply(text);


}




send.addEventListener(
"click",
sendMessage
);



input.addEventListener(
"keypress",
(e)=>{

if(e.key==="Enter"){

sendMessage();

}

});


});
