<script>

</script>

<div id="home" class="container">
  <div class="title">
    <h1>Geoffroy<br /><strong>VIE</strong></h1>
    <h2>front-end developer</h2>
  </div>
  <div class="image"></div>
</div>

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
      background: linear-gradient(hsla(0deg, 0%, 0%, 0.6), hsla(0deg, 0%, 0%, 0.6)), url('/images/background/title.jpg');
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
      background: url('/images/background/title.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 65%;
    }

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
	
</style>
