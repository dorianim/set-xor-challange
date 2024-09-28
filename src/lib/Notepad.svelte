<script lang="ts">
    import { Heading, Textarea } from "flowbite-svelte";
</script>

<div class="flex flex-col gap-3">
    <Heading tag="h2">Notepad</Heading>
    <Textarea
        id="textarea-id"
        placeholder="Your message"
        rows="4"
        name="message"
    />
</div>
