<template>
    <div class="card">
        <div class="card-header p-1">
            <h3 class="text-center">
                <a href="/projects">My projects</a>
            </h3>
        </div>
        <div class="card-body pt-3 h-320 overflow-y-scroll">
            <div v-if="this.projects.length > 0" class="list list-group unstyled-list">
                <div v-for="(project, index) in this.projects" :key="index">
                    <div class="row" >
                        <div class="col-9 text-left d-flex align-items-center">
                            <div class="w-250">
                                <a :href="'/projects/'+project.id+'/show/'">{{ project.name }}</a>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-1">
                </div>
            </div>
            <div v-else>
                <p>Fetching latest data...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	props: [],
	data() {
		return {
			projects:[]
		};
	},

	methods: {
		async getProjects() {
			let response = await axios.get("/user/projects");
			this.projects =  response.data;

		}
	},

	mounted() {
		this.getProjects();
	},

};


</script>
