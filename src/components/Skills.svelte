<script>
  import Inview from 'svelte-inview';
  import { selected } from '../stores';

  let ref;
</script>

<Inview
  wrapper={ref}
  rootMargin="0px"
  threshold="0.8"
  on:enter={() => ($selected = 3)}
>
  <section id="skills" bind:this={ref}>
    <h3>my<br /><em>SKILLS</em></h3>
    <div class="icons">
      <figure>
        <img src="/images/logo/html.png" alt="HTML 5" loading="lazy" />
        <figcaption>HTML 5</figcaption>
      </figure>
      <figure>
        <img src="/images/logo/css.png" alt="CSS 3" loading="lazy" />
        <figcaption>CSS 3</figcaption>
      </figure>
      <figure>
        <img
          src="/images/logo/javascript.png"
          alt="JavaScript"
          loading="lazy"
        />
        <figcaption>JavaScript</figcaption>
      </figure>
      <figure>
        <img src="/images/logo/react.png" alt="React" loading="lazy" />
        <figcaption>React</figcaption>
      </figure>
      <figure>
        <img src="/images/logo/next.png" alt="Next" loading="lazy" />
        <figcaption>Next</figcaption>
      </figure>
      <figure>
        <img
          src="/images/logo/typescript.png"
          alt="TypeScript"
          loading="lazy"
        />
        <figcaption>TypeScript</figcaption>
      </figure>
      <figure>
        <img src="/images/logo/linux.png" alt="Linux" loading="lazy" />
        <figcaption>Linux</figcaption>
      </figure>
      <figure>
        <img src="/images/logo/windows.png" alt="Windows" loading="lazy" />
        <figcaption>Windows</figcaption>
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

  img {
    display: block;
    height: 80px;
    margin: 0 40px;
  }

  figcaption {
    margin-top: 10px;
    text-align: center;
  }
</style>
