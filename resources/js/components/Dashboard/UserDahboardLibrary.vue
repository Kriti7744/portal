<template>
  <div class="card text-center">
    <div class="card-header p-1">
      <h3><a href="/knowledgecafe/library/books">Library</a></h3>
    </div>
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a
            id="wishlist"
            class="nav-link active c-pointer"
            @click="setActiveTile('wishlist')"
            >Your wishlist</a
          >
        </li>
        <li class="nav-item">
          <a id="read" class="nav-link c-pointer" @click="setActiveTile('read')"
            >You have read</a
          >
        </li>

        <li class="nav-item">
          <a
            id="recommend"
            class="nav-link c-pointer"
            @click="setActiveTile('recommend')"
            >Recommend</a
          >
        </li>
      </ul>
    </div>
    <div class="card-body pt-3" style="height: 15em;overflow: auto;">
      <div v-show="this.activeTile == 'wishlist'">
        <user-dashboard-wishlist-books />
      </div>
      <span v-show="this.activeTile == 'read'">
        <user-dashboard-read-books />
      </span>
      <span v-show="this.activeTile == 'recommend'">
        Books recommend for you. COMING SOON
      </span>
    </div>
  </div>
</template>

<script>
export default {
	props: [],
	data() {
		return {
			activeTile: "wishlist",
		};
	},

	methods: {
		async getReadBooks() {
			let response = await axios.get("/user/read-books");
			this.books = response.data;
		},
		setActiveTile(tile) {
			this.activeTile = tile;
			document.querySelector(".active").classList.remove("active");
			document.querySelector(`#${tile}`).classList.add("active");
		},
	},

	mounted() {
		this.getReadBooks();
	},
};
</script>
