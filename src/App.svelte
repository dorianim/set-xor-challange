<script lang="ts">
import "./app.postcss";
import HexToAscii from './lib/HexToAscii.svelte';
import Xor from './lib/Xor.svelte';
    import UsefulValues from "./lib/UsefulValues.svelte";
    import Notepad from "./lib/Notepad.svelte";
</script>

<main class="container mx-auto p-4 lg:pt-12 flex flex-col gap-8">
  <HexToAscii></HexToAscii>
  <Xor></Xor>
  <Notepad></Notepad>
  <UsefulValues></UsefulValues>
</main>
