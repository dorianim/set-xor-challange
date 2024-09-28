<script lang="ts">
    import { ToolbarButton, TransitionFrame } from "flowbite-svelte";
    import { FileCopyOutline } from "flowbite-svelte-icons";
    import { copyText } from "./helpers";

    export let value: string = "";
    export let placeholder: string = "";
    let clazz: string = "";
    export { clazz as class };
</script>

<TransitionFrame
    dismissable={true}
    color="primary"
    role="alert"
    rounded
    class="gap-3 text-sm flex items-center p-0 {clazz}"
>
    <div class="p-3 flex overflow-scroll w-full">
        {value.length === 0 ? placeholder : value}
    </div>

    {#if value.length !== 0}
        <ToolbarButton
            on:click={() => copyText(value)}
            class="ms-auto my-0 p-1 m-2"
        >
            <FileCopyOutline></FileCopyOutline>
        </ToolbarButton>
    {/if}
</TransitionFrame>
