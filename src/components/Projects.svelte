<script>
  import Inview from 'svelte-inview';
  import { selected } from '../stores';
  import { projects } from '../data.js';

  let ref;

</script>

<Inview
  wrapper={ref}
  rootMargin="0px"
  threshold=0.4
  on:enter={() => $selected = 4}>

<section id="projects" bind:this={ref}>
  <h3>my<br /><em>PROJECTS</em></h3>
  <div class="container">

    {#each projects as project (project.id)}

      <div class="card">
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src='/images/projects/{project.name.toLowerCase()}.png' alt={project.title} loading="lazy" />
        </a>
        <h4>{project.title}</h4>
        <div class="stack">

          {#each project.stack as tech}
            <img src='images/logo/{tech.toLowerCase()}.png' alt={tech} loading="lazy" title={tech} />
          {/each}

        </div>
        <p>{project.description}</p>
      </div>

    {/each}

</section>
</Inview>

<style>

  section {
    background: linear-gradient(hsla(0deg, 0%, 100%, 0.7), hsla(0deg, 0%, 100%, 0.7)), url('/images/background/projects.webp');
    background-repeat: no-repeat;
    background-size: cover;
  }

  h3 > em {
    background: linear-gradient(transparent 46%, #0093d9 46%, #0093d9 75%, transparent 75%);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px auto;
    text-align: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    margin: 20px 30px 40px 30px;
    max-width: 400px;
  }

  img {
    display: block;
  }

  .card > a > img {
    box-shadow: 0px 0px 5px 5px #c5c5c5;
    margin: auto;
    max-height: 210px;
    max-width: 350px;
    width: 90%;
  }

  .stack {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  .stack > img {
    height: 50px;
    margin: auto;
  }

  @media only screen and (min-width: 1280px) {
    .container {
      justify-content: center;
    }

    .card > a {
      transition: transform 0.2s ease-in-out;
    }

    @media (any-hover: hover) {
      .card > a:hover {
        transform: scale(1.05);
      }
    }
  }

</style>
