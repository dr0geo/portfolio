<script>
  import Inview from 'svelte-inview';
  import { selected } from '../stores';
  import { projects } from '../data.js';

  let ref;
</script>

<Inview
  wrapper={ref}
  threshold={0.5}
  on:leave={({ detail }) => {
    if (detail.scrollDirection.vertical === 'up') {
      $selected = 5;
    } else {
      $selected = 3;
    }
  }}
>
  <section id="projects" bind:this={ref}>
    <h3>my<br /><em>PROJECTS</em></h3>
    <div class="container">
      {#each projects as project (project.id)}
        <Inview let:inView wrapper={ref} rootMargin="-300px" unobserveOnEnter={true}>

        <div class="card" bind:this={ref} class:flyIn={inView} class:first={project.id === 1} class:second={project.id === 2} class:third={project.id === 3}>
          <!-- Flipping when on desktop -->
          <a href={project.url} target="_blank" rel="noreferrer">
            <div class="flip-container">
              <div class="flip-inner">
                <img
                  class="front"
                  src="/images/projects/{project.name.toLowerCase()}.png"
                  alt={project.title}
                  loading="lazy"
                />
                <ul class="back">
                  <li><strong>{project.shortTitle}</strong></li>
                  {#each project.shortDescription as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </a>
          <h4>{project.title}</h4>
          <div class="stack">
            {#each project.stack as tech}
              <img
                src="images/logo/{tech.toLowerCase()}.svg"
                alt={tech}
                loading="lazy"
                title={tech}
              />
            {/each}
          </div>
          <p class="mobile">{project.description}</p>
        </div>
        </Inview>
      {/each}
    </div>
  </section>
</Inview>

<style>
  section {
    background: linear-gradient(
        hsla(0deg, 0%, 100%, 0.95),
        hsla(0deg, 0%, 100%, 0.95)
      ),
      url('/images/background/projects.webp');
    background-repeat: no-repeat;
    background-size: cover;
  }

  h3 > em {
    background: linear-gradient(
      transparent 46%,
      #0093d9 46%,
      #0093d9 75%,
      transparent 75%
    );
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

  .front {
    box-shadow: 0px 0px 5px 5px #c5c5c5;
    margin: auto;
    max-height: 210px;
    max-width: 350px;
    width: 90%;
  }

  .back {
    display: none;
  }

  .stack {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .stack > img {
    height: 50px;
  }

  .stack > img + img {
    margin-left: 50px;
  }

  @media only screen and (min-width: 1280px) {
    @keyframes translateIn {
      0% {
        transform: translateY(100px);
      }
      100% {
        transform: translateY(0);
      }
    }

    .card {
      transform: translateY(100px);
    }

    /* Up transition when appearing in viewport */
    .flyIn {
      animation: translateIn 0.5s ease-in-out both;
    }

    .first {
      animation-delay: 0.5s;
    }

    .second {
      animation-delay: 0.8s;
    }

    .third {
      animation-delay: 1.1s;
    }

    @media (any-hover: hover) {

      /* Hide mobile description */
      .mobile {
        display: none;
      }

      /* Flip image when hovered */
      .flip-container {
        height: 210px;
        margin: auto;
        perspective: 1000px;
        width: 350px;
      }

      .flip-inner {
        height: 100%;
        position: relative;
        transition: transform 0.3s ease-in-out 0.1s;
        transform-style: preserve-3d;
        width: 100%;
      }

      .front {
        backface-visibility: hidden;
        height: 100%;
        position: absolute;
        width: 100%;
      }

      .back {
        background-color: hsla(0deg, 0%, 0%, 0.9);
        backface-visibility: hidden;
        color: lightgray;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        list-style-type: none;
        padding-left: 10px;
        position: absolute;
        transform: rotateY(180deg);
        width: 100%;
      }

      strong {
        border-bottom: 1px solid lightgray;
      }
      
      .flip-container:hover > .flip-inner {
        transform: rotateY(180deg);
      }
    }
  }
</style>
