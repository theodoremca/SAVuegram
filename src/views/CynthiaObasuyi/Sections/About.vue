<template>
    <section id="about" class="shadow-blue white-bg padding">
        <h3 class="section-title">About Me</h3>
        <spacer :size="80"></spacer>


        <div class="row">
            <div class="col-md-3">
                <img src="images/about.png" alt="about"/>
            </div>
            <div class="col-md-9">
                <h2 class="mt-4 mt-md-0 mb-4">Hello,</h2>
                <p class="mb-0">
                    I am Bako Doe, web developer from London, United Kingdom. I have
                    rich experience in web site design and building and
                    customization, also I am good at wordpress.
                </p>
                <div class="row my-4">
                    <div class="col-md-6">
                        <p class="mb-2">
                            Name: <span class="text-dark">Bako Doe</span>
                        </p>
                        <p class="mb-0">
                            Birthday: <span class="text-dark">14 August, 1990</span>
                        </p>
                    </div>
                    <div class="col-md-6 mt-2 mt-md-0 mt-sm-2">
                        <p class="mb-2">
                            Location: <span class="text-dark">London, UK</span>
                        </p>
                        <p class="mb-0">
                            Email: <span class="text-dark">hello@bako.com</span>
                        </p>
                    </div>
                </div>
                <a href="#" class="btn btn-default mr-3"
                ><i class="icon-cloud-download"></i>Download CV</a
                >
                <a href="#" class="btn btn-alt mt-2 mt-md-0 mt-xs-2"
                ><i class="icon-envelope"></i>Hire me</a
                >
            </div>
        </div>
    </section>
</template>
<script>
    import Spacer from '@/components/Spacer.vue'

    export default {
        name: 'about',
        components: {Spacer},
        props:{
            introduction:Object,
            default:{
                name:"I'm Cynthia Obasuyi",

            }
        }

    }
</script>