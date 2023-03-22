const button = document.getElementById("btn");

button.addEventListener("click",async ()=>{
    const module = await import("./06-module.mjs");
    console.log(module);
    module.hello();
});