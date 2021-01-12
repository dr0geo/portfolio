<script>
  let selected = 1;
</script>

<nav>
  <ul>
    <li
      class={selected === 1 ? 'selected' : ''}
      on:click={() => {
        selected = 1;
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'})
      }}
    >
        Home
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
      border-bottom: 3px solid transparent;
      list-style-type: none;
      padding: 10px 0;
    }

    .selected {
      border-bottom: 3px solid #0093d9;
    }
      @media (any-hover: hover) {
        li {
          cursor: pointer;
        }
      }
  }

</style>
