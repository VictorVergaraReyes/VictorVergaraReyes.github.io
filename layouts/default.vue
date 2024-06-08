<template>
    <div class="bg-green-50">
        <section id="banner" class="bg-green-300 pt-5 pb-5 pl-10 pr-10">
            <div class="header">                
            </div>
            <h1 class="text-center text-4xl"><b>Víctor Vergara Reyes</b></h1>
            <h2 class="text-center">Full Stack developer</h2>
            <p class="text-center">                
            </p>
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
        <section id="projects" class="columns-1 md:columns-2 lg:columns-3 pt-5 pb-5 pl-10 pr-10">
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
        </section>
        <section id="about" class="flex bg-green-50 columns-2 pt-5 pb-5 pl-10 pr-10">

            <div class="align-items-center">
                <h2>About me</h2>
                <br>
                <p class="align-items-center">I'm a full stack developer with a passion for creating beautiful, functional web applications. I have experience working with a variety of technologies</p>
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