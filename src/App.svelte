<script>

	import { fade } from 'svelte/transition';

	import NavBar from './components/Header/NavBar.svelte';
	import Landing from './components/Header/Landing.svelte';
	import Introduction from './components/Introduction/Introduction.svelte';
	import Details from './components/Introduction/Details.svelte';
	import Skills from './components/Skills.svelte';
	import Projects from './components/Projects.svelte';

	let selected = 1;
	
</script>

<header in:fade={{ duration: 600 }}>
	<NavBar {selected} />
	<Landing />
</header>
<main>
	<Introduction />
	<Details />
	<Skills />
	<Projects />
</main>
