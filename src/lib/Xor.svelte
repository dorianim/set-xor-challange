<script lang="ts">
    import { Alert, Button, Heading, Input, P } from "flowbite-svelte";
    import {  ArrowUpDownOutline} from 'flowbite-svelte-icons';

    import { bytesToHex, hexToBytes } from "./helpers";

    let input1: string = '';
    let input2: string = '';

    let output: string = '';

    const xor = (input1: string, input2: string) => {
        let bytes1 = hexToBytes(input1);
        let bytes2 = hexToBytes(input2);
        
        if (bytes1.length !== bytes2.length) {
            return 'Error: Input lengths must be equal';
        }

        let xor = new Uint8Array(bytes1.length);
        for (let i = 0; i < bytes1.length; i++) {
            xor[i] = bytes1[i] ^ bytes2[i];
        }

        return bytesToHex(xor);
    };

    $: output = xor(input1, input2);
</script>

<div class="flex flex-col gap-3">
    <Heading tag="h2">XOR calculator</Heading>
    <P>This calculator can be used to calculate bytwise XOR on two HEX encoded values. It outputs a hex encoded value.</P>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <Input type="text" bind:value={input1} placeholder="Enter the first value here" />
        <Input type="text" bind:value={input2} placeholder="Enter the second value here" />
    </div>


    <Alert class="!p-3">{output.length == 0 ? "Output will show up here":output}</Alert>
</div>