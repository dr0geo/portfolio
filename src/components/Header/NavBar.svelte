<script>
  let selected = 1;
</script>

<nav>
  <ul>
    <li
      class={selected === 1 ? 'selected' : ''}
      on:click={() => (selected = 1)}>
      <a href="#home">Home</a>
    </li>
    <li
      class={selected === 2 ? 'selected' : ''}
      on:click={() => (selected = 2)}>
      <a href="#about-me">About me</a>
    </li>
    <li
      class={selected === 3 ? 'selected' : ''}
      on:click={() => (selected = 3)}>
      <a href="#home">Skills</a>
    </li>
    <li
      class={selected === 4 ? 'selected' : ''}
      on:click={() => (selected = 4)}>
      <a href="#home">Works</a>
    </li>
    <li
      class={selected === 5 ? 'selected' : ''}
      on:click={() => (selected = 5)}>
      <a href="#home">Reviews</a>
    </li>
    <li
      class={selected === 6 ? 'selected' : ''}
      on:click={() => (selected = 6)}>
      <a href="#home">Contact</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    display: none;
  }

  @media only screen and (min-width: 1280px) {
    nav {
      background-color: white;
      display: block;
      padding: 10px 0;
      position: fixed;
      top: 0;
      width: 100vw;
      z-index: 10;
    }

    ul {
      align-items: center;
      display: flex;
      justify-content: space-around;
    }

    li {
      list-style-type: none;
    }

    a {
      border-bottom: 3px solid transparent;
      display: block;
      padding: 10px 0;
      transition: border-bottom 0.2s ease-in-out;
    }

    .selected {
      border-bottom: 3px solid #0093d9;
    }
      @media (any-hover: hover) {
        a {
          cursor: pointer;
        }
      }
  }

</style>
