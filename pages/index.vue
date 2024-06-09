
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
            
            <div class="col-2 text-center">
                
                <button
                class="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                Upload Files
                </button>
                <button
                class="flex select-none items-center gap-3 rounded-lg border border-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                >
                Refresh
                </button>
            </div>
        </section>
        <section id="projects" class="pt-10 pb-5 pl-10 pr-10">
            <h2 class="text-2xl text-center"><b>Checkout my projects</b></h2>
            <!-- card -->
             <div class="columns-1 md:columns-2 lg:columns-3">
                 <arcticle class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                     <div class="p-6">
                         <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                         UI/UX Review Check
                         </h5>
                         <img src="https://placehold.co/330x300" alt="placeholder img">
                         <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                         The place is close to Barceloneta Beach and bus stop just 2 min by walk
                         and near to "Naviglio" where you can enjoy the main night life in
                         Barcelona.
                         </p>
                     </div>
                     <div class="p-6 pt-0">                
                         <button
                         class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                         type="button"
                         data-ripple-light="true"
                         >
                         Read More
                         </button>
                     </div>
                 </arcticle>
                 <!-- card -->
                 <arcticle class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                     <div class="p-6">
                         <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                         UI/UX Review Check
                         </h5>
                         <img src="https://placehold.co/330x300" alt="placeholder img">
                         <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                         The place is close to Barceloneta Beach and bus stop just 2 min by walk
                         and near to "Naviglio" where you can enjoy the main night life in
                         Barcelona.
                         </p>
                     </div>
                     <div class="p-6 pt-0">                
                         <button
                         class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                         type="button"
                         data-ripple-light="true"
                         >
                         Read More
                         </button>
                     </div>
                 </arcticle>
                 <!-- card -->
                 <arcticle class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                     <div class="p-6">
                         <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                         UI/UX Review Check
                         </h5>
                         <img src="https://placehold.co/330x300" alt="placeholder img">
                         <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                         The place is close to Barceloneta Beach and bus stop just 2 min by walk
                         and near to "Naviglio" where you can enjoy the main night life in
                         Barcelona.
                         </p>
                     </div>
                     <div class="p-6 pt-0">                
                         <button
                         class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                         type="button"
                         data-ripple-light="true"
                         >
                         Read More
                         </button>
                     </div>
                 </arcticle>
             </div>
        </section>
        <section id="about" class="flex bg-green-50 columns-2 pt-5 pb-5 pl-10 pr-10">
            <div class="align-items-center">
                <h2>About me</h2>
                <br>
                <p class="align-items-center">I'm a full stack developer with a passion for creating beautiful, functional web applications. I have experience working with a variety of technologies</p>
                <!-- <a href="~/assets/cv/FrontEnd_VictorVergara.pdf">
                    <button
                    class="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">
                    View my resume
                    </button>
                </a> -->
                <!-- <div class="pdf-viewer">
                    <iframe src="../assets/cv/FrontEnd_VictorVergara.pdf" frameborder="0" allowfullscreen></iframe>
                </div> -->
                <!-- <PdfViewer pdf="https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf" /> -->
                <!-- <PdfApp style="height: 90vh" pdf="../assets/cv/FrontEnd_VictorVergara.pdf"></PdfApp> -->
                <!-- <Vue-pdf-app /> -->
                <!-- <NuxtLink to="/resume">
                    <button>See my resume</button>
                </NuxtLink> -->
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
const router = useRouter();

function handleNavigation() {
    router.push('/resume');
  }
</script>