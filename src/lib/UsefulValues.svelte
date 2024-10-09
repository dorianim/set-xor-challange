<script lang="ts">
    import { Heading, P } from "flowbite-svelte";
    import ValueOutputWithCopy from "./ValueOutputWithCopy.svelte";

    const values = [
        ["Your key", "5a6935554b655a4a4b37696e353379584a397a32657071"],
        [
            "Your encrypted message",
            "030640276b09352d2259490d47561d3d244d135309034b3d060c62331c20651f5f001d7c403a37384b1f51114a58",
        ],
        [
            "Leaked encrypted message",
            "3d061001451f3c1e1a1a450e3b161036071701041e27770306514111063e562a1b102e3b1217380c07211153756c",
        ],
    ];
</script>

<div class="flex flex-col gap-3">
    <Heading tag="h2">Useful values</Heading>
    <P>
        These are the values from the exercies, so you don't have to type them
        by hand :)
    </P>

    {#each values as value}
        <Heading tag="h6">{value[0]}</Heading>

        {#if value[1].length > 48}
            <ValueOutputWithCopy
                class="!rounded-b-none z-20"
                value={value[1].substring(0, 46)}
            />
            <ValueOutputWithCopy
                class="mt-[-1rem] !rounded-t-none z-10"
                value={value[1].substring(value[1].length - 46)}
            />
        {:else}
            <ValueOutputWithCopy value={value[1].substring(0, 46)} />
        {/if}
    {/each}
</div>
