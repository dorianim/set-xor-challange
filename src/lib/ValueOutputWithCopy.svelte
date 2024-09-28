<script lang="ts">
    import { Button, ToolbarButton, TransitionFrame} from "flowbite-svelte";
    import { FileCopyOutline } from "flowbite-svelte-icons";
    import { copyText } from "./helpers";
    import type { ComponentProps } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    export let value: string = '';
    export let placeholder: string = '';
    let clazz: string = '';
    export { clazz as class };

</script>
  
  <TransitionFrame dismissable={true} color="primary" role="alert" rounded {...$$restProps} class="gap-3 text-sm flex items-center p-0 {clazz}" on:close let:close>

  
    <div class="p-3 flex overflow-scroll w-full">{value.length === 0 ? placeholder:value}</div>
  
    
    <ToolbarButton  on:click={() => copyText(value)} class="ms-auto my-0 p-3" ><FileCopyOutline></FileCopyOutline></ToolbarButton>
  </TransitionFrame>
