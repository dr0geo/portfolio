<script>
  import { fly } from 'svelte/transition';
  import Inview from 'svelte-inview';
  import { selected } from '../../stores';

  let ref;
</script>

<Inview
  wrapper={ref}
  rootMargin="0px"
  threshold="0.7"
  on:enter={() => ($selected = 1)}
>
  <div id="home" class="container" bind:this={ref}>
    <div class="title">
      <h1 in:fly={{ delay: 400, duration: 700, y: -300 }}>
        Geoffroy<br /><strong>VIE</strong>
      </h1>
      <h2 in:fly={{ delay: 800, duration: 700, y: 300 }}>
        front-end developer
      </h2>
    </div>
    <div class="image" />
  </div>
</Inview>

<style>
  .container {
    display: flex;
    height: 100vh;
  }

  .title {
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 5%;
    width: 60%;
  }
  .image {
    background: linear-gradient(
        hsla(0deg, 0%, 0%, 0.6),
        hsla(0deg, 0%, 0%, 0.6)
      ),
      url('/images/background/title.webp');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 40%;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    background-color: #0093d9;
    color: white;
    font-size: 1.7rem;
    padding: 10px;
    position: relative;
    width: 140%;
    z-index: 1;
  }

  @media only screen and (min-width: 768px) {
    .title {
      width: 40%;
    }

    .image {
      width: 60%;
    }

    h2 {
      width: 120%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .container {
      padding-top: 67px;
    }

    .title {
      width: 35%;
    }

    .image {
      background: url('/images/background/title.webp');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 65%;
    }

    h1 {
      font-size: 4rem;
      padding-left: 50px;
    }

    h2 {
      font-size: 2rem;
      padding-left: 50px;
    }
  }
</style>
