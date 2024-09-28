<script lang="ts">
    import { Alert, Heading, Li, List, P } from "flowbite-svelte";

    const values = [
        ["Your key","797762396669796332326D6F6465356961763978726C6464"],
        ["Your encrypted message", "301f105c46071c16575c4d351102540706055d1906090a440a1e0c5d460e165200010c0d074a535f0f1f0d4e13045109"],
        ["Leaked encrypted message", "26121516411a08000d0556321d06550811050055410a1f431c13091741130b445f0d19014703471f0f1d0259030c1515"]
    ];
</script>

<div class="flex flex-col gap-3">
    <Heading tag="h2">Useful values</Heading>
    <P>These are the values from the exercies, so you don't have to type them by hand :)</P>

    {#each values as value}
        <Heading tag="h6">{value[0]}</Heading>
        <Alert>
            {value[1].substring(0,48)}
            {#if value[1].length > 48}
            <br>
                {value[1].substring(value[1].length-48)}
            {/if}
        </Alert>
    {/each}
</div>