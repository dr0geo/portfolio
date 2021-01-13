<script>

</script>

<section id="about-me">
  <div class="picture">
    <div class="black"></div>
    <div class="grey"></div>
  </div>
  <h3>who i am<br /><em>HELLO</em></h3>
  <div class="text">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>
</section>

<style>

  section {
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
    background-color: black;
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
      grid-template-rows: auto 1fr;
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

    .black, .grey {
      height: 450px;
      width: 450px;
    }

    .grey {
      left: 40px;
      top: -410px;
    }
  }

</style>
