(()=>{"use strict";alert("Hello friend!"),console.log("Hello world");const e=new function(e,t){this.todosWrapper=document.querySelector(".js--todos-wrapper"),this.addItem=e=>{e.preventDefault(),this.input=e.target.querySelector(".js--form__input"),this.todosWrapper.insertAdjacentHTML("beforeend",this.createElement(this.input.value)),this.input.value="",this.input.focus(),document.querySelectorAll(".js--delete").forEach((e=>{e.addEventListener("click",this.delete)})),document.querySelectorAll(".js--done").forEach((e=>{e.addEventListener("click",this.doneItem)}))},this.delete=function(e){e.target.closest(".js--todo-item").remove()},this.doneItem=e=>{let t=e.target.closest(".js--description");e.target.checked?t.style.textDecoration="line-through":t.style.textDecoration="none"},this.createElement=function(e){return`\n        <div class="todo-item js--todo-item">\n            <div class="todo-item__description js--description">${e}\n            <input type="checkbox" class="js--done" style="margin-left: 10px"></div>\n            <button class="todo-item__delete js--delete">Видалити</button>\n        </div>`}}(".js--form__input",".js--todos-wrapper");document.querySelector(".js--form").addEventListener("submit",e.addItem)})();