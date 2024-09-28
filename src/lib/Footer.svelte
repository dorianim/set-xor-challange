<script lang="ts">
    import { Footer, FooterIcon, P, A } from "flowbite-svelte";
    import {
        FacebookSolid,
        GithubSolid,
        DiscordSolid,
        TwitterSolid,
    } from "flowbite-svelte-icons";
</script>

<Footer footerType="socialmedia" class="!bg-transparent !px-0 !mt-[-2rem]">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <P>
            Built for
            <A href="https://mpic.fs.tum.de/studium/studienbeginn/set/">
                SET@TUM
            </A>
            2024
        </P>
        <div
            class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0"
        >
            <FooterIcon
                href="https://github.com/dorianim/set-xor-challenge"
                aClass="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex flex-row items-center gap-2"
            >
                source code
                <GithubSolid class="w-5 h-5 " />
            </FooterIcon>
        </div>
    </div>
</Footer>
