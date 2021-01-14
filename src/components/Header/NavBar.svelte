<script>
  import { selected } from '../../stores';
</script>

<nav>
  <ul>
    <li>
      <a href="#home" class:selected={$selected === 1}>Home </a>
    </li>
    <li>
      <a href="#about" class:selected={$selected === 2}>About me</a>
    </li>
    <li>
      <a href="#skills" class:selected={$selected === 3}>Skills</a>
    </li>
    <li>
      <a href="#projects" class:selected={$selected === 4}>Projects</a>
    </li>
    <li>
      <a href="#reviews" class:selected={$selected === 5}>Reviews</a>
    </li>
    <li>
      <a href="#contact" class:selected={$selected === 6}>Contact</a>
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
      transition: border-bottom 0.2s ease-in-out 0.3s;
    }

    .selected {
      border-bottom: 3px solid #0093d9;
    }
  }
</style>
