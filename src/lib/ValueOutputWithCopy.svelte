<script lang="ts">
    import { Alert, Button, ToolbarButton } from "flowbite-svelte";
    import { FileCopyOutline } from "flowbite-svelte-icons";
    import { copyText } from "./helpers";

    export let value: string = '';
    export let placeholder: string = '';
    let clazz: string = '!py-2 !pr-2';
    export { clazz as class };

</script>



<Alert class="{clazz}" dismissable={value.length !== 0}>
    <div class="py-1">{value.length === 0 ? placeholder:value}</div>

    <ToolbarButton  on:click={() => copyText(value)} class="ms-auto my-0 p-1" slot="close-button"><FileCopyOutline></FileCopyOutline></ToolbarButton>
</Alert>