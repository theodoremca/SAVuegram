<template>
    <section id="skills" class="shadow-blue white-bg padding">
        <h3 class="section-title">My skills</h3>
        <spacer :size="80"></spacer>

        <p class="mb-0">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
        </p>

        <div class="row mt-5">
            <div class="col-md-6">
                <!-- skill item -->
                <div class="skill-item">
                    <div class="skill-info clearfix">
                        <h4 class="float-left mb-3 mt-0">WordPress</h4>
                        <span class="float-right">85%</span>
                    </div>
                    <div class="progress">
                        <div
                                class="progress-bar"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow="85"
                        ></div>
                    </div>
                    <spacer :size="50"></spacer>

                </div>
            </div>

            <div class="col-md-6">
                <!-- skill item -->
                <div class="skill-item">
                    <div class="skill-info clearfix">
                        <h4 class="float-left mb-3 mt-0">HTML & CSS</h4>
                        <span class="float-right">90%</span>
                    </div>
                    <div class="progress">
                        <div
                                class="progress-bar"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow="90"
                        ></div>
                    </div>
                    <spacer :size="50"></spacer>

                </div>
            </div>

            <div class="col-md-6">
                <!-- skill item -->
                <div class="skill-item">
                    <div class="skill-info clearfix">
                        <h4 class="float-left mb-3 mt-0">jQuery</h4>
                        <span class="float-right">60%</span>
                    </div>
                    <div class="progress">
                        <div
                                class="progress-bar"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow="60"
                        ></div>
                    </div>
                    <spacer :classes=" 'd-md-none d-lg-none'" :size="50"></spacer>

                </div>
            </div>

            <div class="col-md-6">
                <!-- skill item -->
                <div class="skill-item">
                    <div class="skill-info clearfix">
                        <h4 class="float-left mb-3 mt-0">Sketch</h4>
                        <span class="float-right">70%</span>
                    </div>
                    <div class="progress">
                        <div
                                class="progress-bar"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow="70"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Spacer from '@/components/Spacer.vue'

    export default {
        name: 'my-skills',
        components: {Spacer}
    }
</script>