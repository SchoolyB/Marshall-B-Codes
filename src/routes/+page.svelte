<script>
  import marshall from "$lib/assets/marshall.jpg";
  import TechStack from "$lib/components/TechStack.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import github from "$lib/assets/icons/github.svg";
  import linkedin from "$lib/assets/icons/linkedin.svg";
  import twitter from "$lib/assets/icons/twitter.svg";
</script>

<svelte:head>
  <title>Marshall B Codes</title>
</svelte:head>

<div class="hero min-h-screen bg-darkgrey text-[#F7F2F6]">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={marshall} class="max-w-xs shadow-2xl rounded-full" />
    <div>
      <h1 class="text-5xl font-bold text-center">Who is Marshall B?</h1>
      <div>
        <p class="text-xl text-center mt-5">
          A passionate software developer from Chicago, Illinois with a passion
          for programming and providing solutions to the worlds problems.
          Experienced in JavaScript, TypeScript, SvelteKit, SQLite and so much
          more!
        </p>
        <div
          id="contactIcons"
          class="flex flex-row justify-center text-center mt-4"
        >
          <a href="https://twitter.com/Fedora__Tipper" target="_blank">
            <img src={twitter} class="w-12 h-12 m-2" />
          </a>
          <a href="https://www.linkedin.com/in/marshallbcodes/" target="_blank">
            <img src={linkedin} class="w-12 h-12 m-2" />
          </a>
          <a href="https://github.com/SchoolyB" target="_blank">
            <img src={github} class="w-12 h-12 m-2 invert" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<TechStack />
<Projects />
