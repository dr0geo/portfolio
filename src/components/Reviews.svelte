<script>
  import Inview from 'svelte-inview';
  import { fade } from 'svelte/transition';
  import { selected } from '../stores';
  import { reviews } from '../data';

  let chosenReview = 1;
  $: reviewToDisplay = reviews.find(review => review.id === chosenReview);

  let ref;
</script>

<Inview
  wrapper={ref}
  threshold={0.5}
  on:leave={({ detail }) => {
    if (detail.scrollDirection.vertical === 'down') {
      $selected = 4;
    } else {
      return;
    }
  }}
>
  <section id="reviews" bind:this={ref}>
    <h3><em>REVIEWS</em></h3>
    <div class="card">
      <img src="/images/logo/quote.png" alt="" loading="lazy" />

      {#key chosenReview}
      <figure class="customer" in:fade={{ delay: 300 }}>
        <img
          src={reviewToDisplay.image}
          alt="{reviewToDisplay.company} logo"
          loading="lazy"
        />
        <figcaption>
          <h4>{reviewToDisplay.name}</h4>
          <p><em>{reviewToDisplay.position}</em></p>
          <p><a href={reviewToDisplay.url} target="_blank" rel="noreferrer">{reviewToDisplay.company}</a></p>
        </figcaption>
      </figure>
      <p class="description" in:fade={{ delay: 300 }}>{reviewToDisplay.description}</p>
      {/key}

    </div>
    <div class="circles">
      {#each reviews as review (review.id)}
        <div
          class="selector"
          class:ticked={chosenReview === review.id}
          on:click={() => (chosenReview = review.id)}
        />
      {/each}
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

  .card {
    background-color: #f2f2f2;
    box-shadow: 2px 2px 5px 5px lightgray;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    max-width: 900px;
    position: relative;
    width: 90%;
  }

  .card > img {
    display: none;
  }

  .customer {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  figure > img {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 5px lightgray;
    display: block;
    max-width: 180px;
    width: 100%;
  }

  figcaption {
    text-align: center;
  }

  figcaption > p:last-of-type {
    margin-top: 10px;
  }

  figcaption > p > em {
    font-style: italic;
  }

  figcaption > p > a {
    border-bottom: 1px solid #1d1d1d;
  }

  h4 {
    margin: 10px auto 0 auto;
  }

  .description {
    padding: 20px;
  }

  .circles {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 60%;
  }

  .selector {
    border: 2px solid #1d1d1d;
    border-radius: 100%;
    height: 30px;
    margin: 10px 20px;
    transition: background-color 0.6s ease-in-out 0.1s;
    width: 30px;
  }

  .ticked {
    background-color: #1d1d1d;
  }

  @media only screen and (min-width: 768px) {
    .card {
      flex-direction: row-reverse;
      justify-content: space-around;
      margin-top: 8vw;
      padding: 20px;
    }

    .card > img {
    display: block;
    height: 10vw;
    left: 10vw;
    position: absolute;
    top: -5vw;
  }

    .customer {
      max-width: 180px;
      padding: 0;
      width: 35%;
    }

    figure > img {
      width: 100%;
    }

    figcaption {
      text-align: left;
      width: 100%;
    }

    p {
      text-align: left;
    }

    .description {
      padding-top: 5vw;
      width: 60%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .card {
      margin-top: 100px;
    }
   
    .card > img {
      height: 120px;
      left: 120px;
      top: -60px;
    }

    .description {
      padding-top: 60px;
    }
  }
</style>
