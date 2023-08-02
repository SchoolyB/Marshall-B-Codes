<script>
  import js from '$lib/assets/icons/js.svg'
  import ts from '$lib/assets/icons/ts.svg'
  import svelte from '$lib/assets/icons/svelte.svg'
  import react from '$lib/assets/icons/react.svg'
  import nodejs from '$lib/assets/icons/nodejs.svg'
  import fastify from '$lib/assets/icons/fastify.svg'
  import express from '$lib/assets/icons/express.svg'
  import sqlite from '$lib/assets/icons/sqlite.svg'
  import mongo from '$lib/assets/icons/mongo.svg'
  import tailwind from '$lib/assets/icons/tailwind.svg'
  import sass from '$lib/assets/icons/sass.svg'
  import git from '$lib/assets/icons/git.svg'
  import npm from '$lib/assets/icons/npm.svg'
  import yarn from '$lib/assets/icons/yarn.svg'
  import vscode from '$lib/assets/icons/vscode.svg'
  import ubuntu from '$lib/assets/icons/ubuntu.svg'
</script>

<div class="bg-darkgrey ">
  <h1 class="w-6/12 m-auto text-5xl font-bold text-center mb-10 text-[#F7F2F6]">Technologies</h1>
<div id="technologies" class="flex flex-col justify-center text-center" >
  <div id="techRowOne">
  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://www.javascript.com/" target="_blank">
        <img src={js} />
      </a>
    </div>    
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={ts} />
      </a>
    </div>    
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://svelte.dev/" target="_blank">
        <img src={svelte} />
      </a>
    </div>    
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://reactjs.org/" target="_blank">
        <img src={react} />
      </a>
    </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://nodejs.org/en/" target="_blank">
        <img src={nodejs} />
      </a>
    </div>  
  </div> 
<!-- TODO find fastify svg -->
  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://www.fastify.io/" target="_blank">
        <img src={fastify} />
      </a>
    </div>
  </div> 

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://expressjs.com/" target="_blank">
        <img src={express} />
      </a>
      </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://www.sqlite.org/index.html" target="_blank">
        <img src={sqlite} />
      </a>
      </div>
  </div>
</div>
<!-- START OF ROW TWO -->

<div id="techRowTwo">


  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://code.visualstudio.com/" target="_blank">
        <img src={vscode} />
      </a>
    </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://ubuntu.com/" target="_blank">
        <img src={ubuntu} />
      </a>
    </div>
  </div>
 
  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://www.mongodb.com/" target="_blank">
        <img src={mongo} />
      </a>
    </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://sass-lang.com/" target="_blank">
        <img src={sass} />
      </a>
    </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://tailwindcss.com/" target="_blank">
        <img src={tailwind} />
      </a>
    </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://yarnpkg.com/" target="_blank">
      	<img src={yarn} />
      </a>
    </div>
  </div>

  
  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://www.npmjs.com/" target="_blank">
        <img src={npm} />
      </a>
    </div>
  </div>

  <div class="avatar">
    <div class="w-24 rounded-full">
      <a href="https://git-scm.com/" target="_blank">
        <img src={git} />
      </a>
    </div>
  </div>
</div>
</div>
</div>