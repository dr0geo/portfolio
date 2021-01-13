<section id="projects">
  <h3>my<br /><em>PROJECTS</em></h3>
  <div class="container">
    <div class="card">
      <img src="/images/projects/augustine.png" alt="Crêperie Augustine website" loading="lazy" />
      <h4>"Crêperie Augustine" website</h4>
      <div class="stack">
        <img src="/images/logo/react.png" alt="React" loading="lazy" />
        <img src="/images/logo/next.png" alt="Next" loading="lazy" />
        <img src="/images/logo/firebase.png" alt="Firebase" loading="lazy" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div class="card">
      <img src="/images/projects/peintepox.png" alt="Peintepox website" loading="lazy" />
      <h4>"Peintepox" website</h4>
      <div class="stack">
        <img src="/images/logo/react.png" alt="React" loading="lazy" />
        <img src="/images/logo/next.png" alt="Next" loading="lazy" />
        <img src="/images/logo/styled-components.png" alt="Styled-Components" loading="lazy" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div class="card">
      <img src="/images/projects/portfolio.png" alt="Portfolio" loading="lazy" />
      <h4>My portfolio</h4>
      <div class="stack">
        <img src="/images/logo/svelte.png" alt="Svelte" loading="lazy" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </div>
  
</section>

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

  .card > img {
    box-shadow: 0px 0px 5px 5px #c5c5c5;
    margin: auto;
    max-height: 210px;
    max-width: 350px;
    width: 85%;
  }

  .stack {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  .stack > img {
    height: 50px;
  }

  @media only screen and (min-width: 1280px) {
    .container {
      justify-content: center;
    }
  }

</style>
