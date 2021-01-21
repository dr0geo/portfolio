<script>
  import Inview from 'svelte-inview';
 
  import { selected } from '../../stores';

  let ref;
</script>

<Inview
  wrapper={ref}
  threshold={0.5}
  on:enter={({ detail }) => {
    if (detail.scrollDirection.vertical === 'up') {
      $selected = 2;
    } else {
      return;
    }
  }}
  on:leave={({ detail }) => {
    if (detail.scrollDirection.vertical === 'down') {
      $selected = 1
    } else {
      return;
    }
  }}
>
<section id="about" bind:this={ref}>
  <div class="picture">
    <div class="black" />
    <div class="grey" />
  </div>
  <h3>who i am<br /><em>HELLO</em></h3>
  <div class="text">
    <p>
      Welcome on my portfolio website! My name is <strong>Geoffroy</strong>, I come from <strong>France</strong>, and I am currently undergoing a professional retraining. Indeed, I served my country in the French Air Force where I was a pilot for more than 7 years. I have been flying the C-130H tactical transport aircraft on a variety of missions. However, I felt like I needed to bring some change into my professional and personal life. This is why I decided to leave the Air Force at the beginning of 2020, and I <strong>moved to Cork</strong>, Ireland where I got a position as a flight instructor.
    </p>
    <p>
      I knew that I wanted to change my working environment completely, but this allowed me to benefit from a smooth transition, the time for me to <strong>learn web development</strong>. Unfortunately, the covid-19 crisis had a big impact on the company where I was supposed to work, and my job was cancelled. This led me to learn web development on a <strong>full time basis</strong> so that I could land a job in that field, or at least some freelance work as soon as possible.
    </p>
  </div>
</section>
</Inview>

<style>
  section {
    background-color: #f2f2f2;
    display: grid;
    gap: 3vw 7vw;
    grid-template-columns: 25vw 1fr;
    grid-template-rows: 25vw auto;
  }

  .picture {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 40%;
  }

  .black {
    background-color: #1d1d1d;
    height: 25vw;
    width: 25vw;
  }

  .grey {
    background-color: grey;
    height: 25vw;
    left: 3vw;
    position: relative;
    top: -22vw;
    width: 25vw;
  }

  h3 {
    align-self: center;
    font-size: 10vw;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  h3 > em {
    background: linear-gradient(
      transparent 46%,
      #0093d9 46%,
      #0093d9 75%,
      transparent 75%
    );
  }

  .text {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  p {
    margin: 20px auto;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 6vw;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      gap: 0 50px;
      grid-template-columns: 490px 1fr;
      grid-template-rows: 145px 345px;
    }

    .picture {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    h3 {
      font-size: 3rem;
    }

    .text {
      grid-column: 2 / 3;
    }

    .black,
    .grey {
      height: 400px;
      width: 400px;
    }

    .grey {
      left: 40px;
      top: -360px;
    }

    p {
      text-align: left;
    }
  }
</style>
