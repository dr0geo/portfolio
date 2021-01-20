<script>
  import Inview from 'svelte-inview';
  import { draw, fade } from 'svelte/transition';

  import { svgPaths } from '../data';
  import { selected } from '../stores';

  let ref;
  let visible = false;

</script>

<Inview
  wrapper={ref}
  threshold={0.5}
  on:leave={({ detail }) => {
    if (detail.scrollDirection.vertical === 'up') {
      $selected = 4;
    } else {
      $selected = 2;
    }
  }}
  on:enter={() => visible = true}
>
  <section id="skills" bind:this={ref}>
    <h3>my<br /><em>SKILLS</em></h3>
    <div class="icons">
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="141.12" height="155.2" viewBox="0 0 441 485" class:fill={visible} class:html={visible}>
          {#if visible}
            <path
              in:draw={{ duration: 5000, delay: 500 }}
              d={svgPaths.html}
              stroke="#db4b24"
              stroke-width="5px"
              stroke-linejoin="round"
            />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>HTML 5</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="141.12" height="161.92" viewBox="0 0 441 506" class:fill={visible} class:css={visible}>
          {#if visible}
          <path
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.css}
            stroke="#016db6"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>CSS 3</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="159.36" height="159.681" viewBox="0 0 498 499" class:fill={visible} class:stroke={visible} class:js={visible}>
          {#if visible}
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.javascript}
            stroke="#000"
            stroke-width="1px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>JavaScript</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="141.12" height="161.28" viewBox="0 0 441 504" class:fill={visible} class:react={visible}>
          {#if visible}
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.react}
            stroke="#00d2f5"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>React</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="159.36" height="163.521" viewBox="0 0 498 511" class:fill={visible} class:next={visible}>
          {#if visible}
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.next}
            stroke="#000"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>Next</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="293.334" height="353.334" viewBox="0 0 220 265" class:fill={visible} class:svelte={visible}>
          {#if visible}
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.svelte}
            stroke="#ff3e00"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>Svelte</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="180.801" height="195.201" viewBox="0 0 565 610" class:fill={visible} class:linuxBlack={visible}>
          {#if visible}
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.linuxBlack}
            stroke="#000"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.linuxYellow}
            stroke="#efd304"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>Linux</figcaption>
      </figure>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="163.2" height="191.68" viewBox="0 0 510 599" class:fill={visible} class:windows={visible}>
          {#if visible}
          <path 
            in:draw={{ duration: 5000, delay: 500 }}
            d={svgPaths.windows}
            stroke="#00a8e8"
            stroke-width="5px"
            stroke-linejoin="round"
          />
          {/if}
        </svg>
        <figcaption class:displayed={visible}>Windows</figcaption>
      </figure>
    </div>
  </section>
</Inview>

<style>
  h3 {
    text-align: center;
  }

  h3 > em {
    background: linear-gradient(
      transparent 46%,
      #ff7829 46%,
      #ff7829 75%,
      transparent 75%
    );
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 25px auto;
    max-width: 750px;
  }

  figure {
    margin: 30px auto;
  }

  svg {
    display: block;
    fill: white;
    height: 80px;
    margin: 0 40px;
    width: 80px;
  }

  .fill {
    transition: fill 4s ease-in-out 0.5s;
  }

  .html {
    fill: #db4b24;
  }

  .css {
    fill: #016db6
  }

  .js {
    fill: #f0d91d;
  }

  .react {
    fill: #00d2f5;
  }

  .next {
    fill: #000;
  }

  .svelte {
    fill: #ff3e00;
  }

  .linuxBlack {
    fill: #000;
  }

  .windows {
    fill: #00a8e8;
  }

  figcaption {
    margin-top: 10px;
    opacity: 0;
    text-align: center;
    transition: opacity 0.3s ease-in-out 2.7s;
  }

  .displayed {
    opacity: 1;
  }
</style>
