
<template>
    <div class="bg-green-50">
        <section id="banner" class="bg-green-300 pt-5 pb-5 pl-10 pr-10">            
            <div class="header">                
            </div>
            <div class="p-20">
                <h1 class="text-center text-4xl pt-10"><b>Víctor Vergara Reyes</b></h1>
                <h2 class="text-center pb-5">Full Stack developer</h2>            
                <p class="text-center pt-5 pb-5 pl-10 pr-10">I am a skilled full-stack developer with a passion for building high-performance and scalable web applications. I have a strong understanding of both front-end and back-end technologies, and I am proficient in using popular frameworks like Vue, React and Node.js. I am also experienced in working with various databases, including MySQL, PostgreSQL.</p>
            </div>            
        </section>
        <section id="projects" class="container mx-auto pt-10">
            <h2 class="text-2xl text-center"><b>Checkout my projects</b></h2>
            <!-- card -->
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <Card title="project1"/>
                 <Card/>
                 <Card/>
             </div>
        </section>
        <section id="about" class="flex bg-green-50 columns-2 pt-5 pb-5 pl-10 pr-10">
            <div class="align-items-center">
                <h2>About me</h2>
                <br>
                <p class="align-items-center">I'm a full stack developer with a passion for creating beautiful, functional web applications. I have experience working with a variety of technologies</p>                
                <button
                class="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                @click="handleNavigation()"
                >
                See my resume
                </button>

                
            </div>
            <div class="relative flex rounded-xl">
                <img class="rounded-xl" src="https://placehold.co/600x400" alt="PLACEHOLDER">
            </div>
        </section>
        <section id="contact" class="bg-green-50">
            <ContactForm />
        </section>
    </div>
</template>

<script setup>
// import { NuxtLink } from '@nuxt/router-tools';
import { useRoute, useRouter } from "vue-router";
import Card from "~/components/Card.vue";
const router = useRouter();

function handleNavigation() {
    router.push('/resume');
  }
</script>