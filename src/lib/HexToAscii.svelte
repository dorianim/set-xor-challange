<script lang="ts">
    import { Alert, Button, Heading, Input, P } from "flowbite-svelte";
    import { bytesToHex, hexToBytes } from "./helpers";
    import {  ArrowUpDownOutline} from 'flowbite-svelte-icons';
    import ValueOutputWithCopy from "./ValueOutputWithCopy.svelte";


    let input: string = '';
    let inputIsAscii: boolean = false;

    let output: string = '';

    const hexToAscii = (input: string) => new TextDecoder().decode(hexToBytes(input));
    const asciiToHex = (input: string) => bytesToHex(new TextEncoder().encode(input));

    $: output = inputIsAscii ? asciiToHex(input) : hexToAscii(input);
</script>

<div class="flex flex-col gap-3">
    <Heading tag="h2">HEX/ASCII converter</Heading>
    <P>This coverter can be used to convert from a hex encoded string to its human redable representation and vice verca.</P>
    <div class="mt-3 flex flex-row items-center gap-3 text-2xl text-center font-bold">
        <span class="text-gray-900 dark:text-white flex-1">{inputIsAscii ? 'ASCII':' HEX '}</span>
        <Button pill={true} outline={true} class="!p-2" on:click={() => {
            input = output;
            inputIsAscii = !inputIsAscii
            }}><ArrowUpDownOutline size="lg" transform="rotate(90)"/> </Button>
        <span class="text-gray-900 dark:text-white flex-1">{!inputIsAscii ? 'ASCII':' HEX '}</span>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <Input type="text" bind:value={input} placeholder={inputIsAscii ? "Enter ASCII here":"Enter HEX here"} />
        <ValueOutputWithCopy value={output} placeholder={inputIsAscii ? "HEX will show up here":"ASCII will show up here"}></ValueOutputWithCopy>
    </div>
</div>