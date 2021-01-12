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
    height: calc(100vh - 67px);
    margin-top: 67px;
  }

  .title {
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 5%;
    width: 35%;
  }

  h1 {
    font-size: 4rem;
    padding-left: 10px;
  }

  h2 {
    background-color: #0093d9;
    color: white;
    font-size: 2rem;
    padding: 10px;
    position: relative;
    width: 120%;
    z-index: 1;
  }

  .image {
    background-image: url('/images/background/title.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 65%;
  }

</style>