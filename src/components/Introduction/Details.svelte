<script>

  import Inview from 'svelte-inview';
  let ref;
  
</script>

<Inview
  let:inView
  wrapper={ref}
  rootMargin="-200px"
  unobserveOnEnter={true}>

<section>
  <h3>come<br /><em>CLOSER</em></h3>
  <div id="container" class="container">
    <div class="card" bind:this={ref}>
      <img src="/images/logo/hercules.png" alt="Military pilot" loading="lazy" class:fadeIn={inView} />
      <div class="circle" >
        <div class="line" class:animate={inView}></div>
      </div>
      <h4>2012 - 2020</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="card">
      <img src="/images/logo/training.png" alt="Military pilot" loading="lazy" class:secondFadeIn={inView} />
      <div class="circle"></div>
      <h4>2020</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="card">
      <img src="/images/logo/dev.png" alt="Military pilot" loading="lazy" 
      class:thirdFadeIn={inView} />
      <div class="circle">
        <div class="line-hide"></div>
      </div>
      <h4>2021 - Ready to move!</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</section>
</Inview>

<style>

  section {
    background-color: #f2f2f2;
    overflow-x: hidden;
    padding-top: 0;
  }

  h3 > em {
    background: linear-gradient(transparent 46%, #ffcd3e 46%, #ffcd3e 75%, transparent 75%);
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .card {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }

  img {
    display: block;
    height: 30vw;
    max-height: 150px;
  }

  .circle, .line {
    display: none;
  }

  @media only screen and (min-width: 1280px) {
    @keyframes translateLine {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .container {
      flex-direction: row;
    }

    .card {
      padding: 0 30px;
    }

    img {
      height: 11vw;
      opacity: 0;
    }

    .circle {
      background-color: #bbbbbb;
      border-radius: 100%;
      display: block;
      height: 20px;
      margin-top: 30px;
      width: 20px;
    }

    .line, .line-hide {
      display: block;
      height: 2px;
      left: 20px;
      max-width: 1120px;
      position: relative;
      top: 9px;
    }

    .line {
      background-color: #bbbbbb;
      transform: scaleX(0);
      transform-origin: left center;
      width: calc(2 *  90vw / 3);
    }

    .animate {
      animation: translateLine 3s ease-in-out both;
    }

    .fadeIn {
      animation: fadeIn 0.7s ease-in-out both;
    }

    .secondFadeIn {
      animation: fadeIn 0.7s 1.3s ease-in-out both;
    }

    .thirdFadeIn {
      animation: fadeIn 0.7s 2.5s ease-in-out both;
    }

    .line-hide {
      background-color: #f2f2f2;
      width: calc(100vh / 3);
    }
  }

</style>
