<script lang="ts">
import "./app.postcss";
import svelteLogo from './assets/svelte.svg'
import viteLogo from '/vite.svg'
import Counter from './lib/Counter.svelte'
import HexToAscii from './lib/HexToAscii.svelte';
import Xor from './lib/Xor.svelte';
import {Alert} from 'flowbite-svelte';
    import UsefulValues from "./lib/UsefulValues.svelte";
</script>

<main class="container mx-auto p-8 lg:pt-12 flex flex-col gap-8">
  <HexToAscii></HexToAscii>
  <Xor></Xor>
  <UsefulValues></UsefulValues>
</main>
