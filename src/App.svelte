<script>
  import { fade } from 'svelte/transition';

  import NavBar from './components/Header/NavBar.svelte';
  import Landing from './components/Header/Landing.svelte';
  import Introduction from './components/Introduction/Introduction.svelte';
  import Details from './components/Introduction/Details.svelte';
  import Skills from './components/Skills.svelte';
	import Projects from './components/Projects.svelte';
	import Reviews from './components/Reviews.svelte';
</script>

<header in:fade={{ duration: 600 }}>
  <NavBar />
  <Landing />
</header>
<main>
  <Introduction />
  <Details />
  <Skills />
	<Projects />
	<Reviews />
</main>
