import{A as e}from"./UIcon.1d0a0309.js";const p=`# JavaScript

---

[\`JavaScript\`](https://www.javascript.com/) JavaScript is a versatile programming language primarily used for web development. It's a core technology of the World Wide Web alongside HTML and CSS. JavaScript allows developers to create dynamic and interactive web pages by adding behavior to the static elements of a website.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

JavaScript can be used for a variety of purposes, including: :

- Client-Side Scripting: JavaScript code runs on the client's web browser, allowing developers to manipulate the HTML content, handle user interactions, and dynamically update the page without reloading it.
- Server-Side Scripting: With the introduction of platforms like Node.js, JavaScript can also be used for server-side scripting, enabling developers to build entire web applications using only JavaScript on both the client and server sides.
- Web Application Development: JavaScript frameworks and libraries like React, Angular, and Vue.js have gained popularity for building single-page applications (SPAs) and complex web interfaces.
- Mobile App Development: Technologies like React Native and Ionic allow developers to build mobile applications using JavaScript, which can then be deployed to multiple platforms like iOS and Android.
- Game Development: JavaScript, along with HTML5 and WebGL, can be used to create browser-based games and interactive experiences.

<br/>

## Example

\`\`\`js
// Prompt the user to enter their name
var name = prompt("What is your name?");

// Check if the user entered a name
if (name) {
    // Display a greeting message
    alert("Hello, " + name + "! Welcome to our website.");
} else {
    // If the user didn't enter a name, display a generic greeting
    alert("Hello! Welcome to our website.");
}
\`\`\`


> JavaScript's versatility, ease of use, and widespread adoption make it a fundamental technology for web development and beyond.
`;function d(o,...t){const s=Object.assign({},o);return Object.keys(s).forEach(r=>{t.includes(r)&&delete s[r]}),s}const n=o=>o,u=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],a=o=>{const t=d(o,"category");return o.category&&(t.category=u.find(s=>s.slug===o.category)),t},c=[a({slug:"js",color:"yellow",description:p,logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),a({slug:"java",color:"yellow",description:"",logo:e.Java,name:"Java",category:"pro-lang"}),a({slug:"css",color:"blue",description:"",logo:e.CSS,name:"CSS",category:"markup-style"}),a({slug:"html",color:"orange",description:"",logo:e.HTML,name:"HTML",category:"markup-style"}),a({slug:"express",color:"green",description:"",logo:e.ExpressJs,name:"ExpressJS",category:"framework"}),a({slug:"nodejs",color:"green",description:"",logo:e.NodeJs,name:"nodeJS",category:"library"}),a({slug:"bootstrap",color:"blue",description:"",logo:e.Bootstrap,name:"Bootstrap",category:"framework"}),a({slug:"python",color:"green",description:"",logo:e.Python,name:"Python",category:"pro-lang"}),a({slug:"numpy",color:"green",description:"",logo:e.Numpy,name:"Numpy",category:"library"}),a({slug:"pandas",color:"blue",description:"",logo:e.Pandas,name:"Pandas",category:"library"}),a({slug:"mysql",color:"blue",description:"",logo:e.MySQL,name:"MySQL",category:"db"}),a({slug:"jquery",color:"blue",description:"",logo:e.Jquery,name:"jQuery",category:"library"}),a({slug:"datatables",color:"blue",description:"",logo:e.Datatables,name:"DataTables",category:"library"}),a({slug:"ejs",color:"green",description:"",logo:e.EJS,name:"EJS",category:"lang"})],y="Skills",b=(...o)=>c.filter(t=>o.includes(t.slug)),v=o=>{const t=[],s=[];return c.forEach(r=>{if(o.trim()&&!r.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!r.category){console.log(r.category),s.push(r);return}let i=t.find(g=>{var l;return g.category.slug===((l=r.category)==null?void 0:l.slug)});i||(i={items:[],category:r.category},t.push(i)),i.items.push(r)}),s.length!==0&&t.push({category:{name:"Others",slug:"others"},items:s}),t};export{v as a,b as g,c as i,y as t};
