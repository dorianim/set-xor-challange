<script lang="ts">
    import { Alert, Heading, Input, P } from "flowbite-svelte";

    import { bytesToHex, hexToBytes } from "./helpers";
    import ValueOutputWithCopy from "./ValueOutputWithCopy.svelte";

    let input1: string = "";
    let input2: string = "";

    let output: string | undefined = "";

    const xor = (input1: string, input2: string): string | undefined => {
        let bytes1 = hexToBytes(input1);
        let bytes2 = hexToBytes(input2);

        if (bytes1.length !== bytes2.length) {
            return undefined;
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
    <P>
        This calculator can be used to calculate bytwise XOR on two HEX encoded
        values. It outputs a hex encoded value.
    </P>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <Input
            type="text"
            clearable
            bind:value={input1}
            placeholder="Enter the first value here"
        />
        <Input
            type="text"
            clearable
            bind:value={input2}
            placeholder="Enter the second value here"
        />
    </div>

    {#if output !== undefined}
        <ValueOutputWithCopy
            value={output}
            placeholder="Output will show up here"
        ></ValueOutputWithCopy>
    {:else}
        <Alert color="red">
            Make sure that both inputs have the same length!
        </Alert>
    {/if}
</div>
