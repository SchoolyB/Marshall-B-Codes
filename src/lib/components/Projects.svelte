<script>
  import idm from "$lib/assets/idm.png";
  import portfolio from "$lib/assets/marshallbcodes.png";
  import stratgg from "$lib/assets/stratgg.png";
</script>

<div class="bg-darkgrey pt-5 text-[#F7F2F6] pb-10">
  <h1 class="w-6/12 m-auto text-5xl font-bold text-center mb-10">Projects</h1>
  <div id="projects" class=" flex flex-row justify-around maxsm:flex-col">
    <!-- IDM CARD -->
    <div
      class="card w-96 bg-[#222222] shadow-2xl maxsm:w-78 maxsm:m-auto maxsm:mb-10"
    >
      <figure>
        <img src={idm} alt="International Data Matrix Home Page" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">The International Data Matrix</h2>
        <p>
          The International Data Matrix is a resource that anyone can use to
          learn about a country's historical, cultural, religious, geographical,
          geo-economical and geo-political information.
        </p>
        <div class="card-actions">
          <a href="https://github.com/SchoolyB/International-Data-Matrix">
            <div class="badge badge-outline">GitHub</div>
          </a>
          <a href="https://international-data-matrix.vercel.app/">
            <div class="badge badge-outline">Link</div>
          </a>
        </div>
        <h2 class="card-title">Tech Stack</h2>
        <div id="idmTechRowOne" class="flex flex-row">
          <div class="badge badge-secondary bg-ts border-none mr-2">
            TypeScript
          </div>
          <div
            class="badge badge-secondary bg-react border-none mr-2 text-darkgrey"
          >
            React
          </div>
          <div class="badge badge-secondary bg-sass border-none">Sass</div>
        </div>
        <div id="idmTechRowTwo" class="flex flex-row">
          <div class="badge badge-secondary bg-nodejs border-none mr-2">
            NodeJs
          </div>
          <div class="badge badge-secondary bg-fastify border-none mr-2">
            Fasitfy
          </div>
          <div class="badge badge-secondary bg-mongodb border-none">
            MongoDB
          </div>
        </div>
      </div>
    </div>
    <!-- PORTFOLIO CARD -->
    <div
      class="card w-96 bg-[#222222] shadow-2xl maxsm:w-78 maxsm:mb-10 maxsm:m-auto"
    >
      <figure><img src={portfolio} alt="My Portfolio" /></figure>
      <div class="card-body">
        <h2 class="card-title">Marshall B Codes</h2>
        <p>
          My Portfolio Website. You are currently on it. I first built this site
          with TypeScript, React, and Sass. Since the initial build I started
          getting more comfortable with Sveltekit and TailwindCSS, so I decided
          to rebuild
        </p>
        <div class="card-actions">
          <a href="https://github.com/SchoolyB/Marshall-B-Codes">
            <div class="badge badge-outline">GitHub</div>
          </a>
          <a href="https://marshallb.vercel.app/">
            <div class="badge badge-outline">Link</div>
          </a>
        </div>
        <h2 class="card-title">Tech Stack</h2>
        <div id="portfolioTechRowOne" class="flex flex-row">
          <div class="badge badge-secondary bg-svelte border-none mr-2">
            Sveltekit
          </div>
          <div class="badge badge-secondary bg-tailwind border-none">
            TailwindCSS
          </div>
        </div>
      </div>
    </div>
    <!-- STRATGG CARD -->
    <div class="card w-96 bg-[#222222] hadow-xl maxsm:w-78 maxsm:m-auto">
      <figure><img src={stratgg} alt="StratGG Home Page" /></figure>
      <div class="card-body">
        <h2 class="card-title">StratGG</h2>
        <p>
          Currently in development StratGGs goal will be to provide a platform
          for young gamers to get recognized by colleges and universities for
          their skills in video games and also provide a platform to find
          teammates and coaches to help them improve their skills.
        </p>
        <div class="card-actions">
          <a href="https://github.com/Stratgg/Stratgg">
            <div class="badge badge-outline">GitHub</div>
          </a>
          <a href="#">
            <div class="badge badge-outline">Link</div>
          </a>
        </div>
        <h2 class="card-title">Tech Stack</h2>
        <div id="stratggTechRowOne" class="flex flex-row">
          <div
            class="badge badge-secondary bg-js border-none mr-2 text-darkgrey"
          >
            JavaScript
          </div>
          <div class="badge badge-secondary bg-svelte border-none mr-2">
            Sveltekit
          </div>
          <div class="badge badge-secondary bg-tailwind border-none">
            TailwindCSS
          </div>
        </div>

        <div id="stratggTechRowTwo" class="flex flex-row">
          <div class="badge badge-secondary bg-ts border-none mr-2">
            TypeScript
          </div>
          <div class="badge badge-secondary bg-nodejs border-none mr-2">
            NodeJs
          </div>
          <div class="badge badge-secondary bg-fastify border-none mr-2">
            Fasitfy
          </div>
          <div class="badge badge-secondary bg-sqlite border-none">SQLite</div>
        </div>
      </div>
    </div>
  </div>
</div>
