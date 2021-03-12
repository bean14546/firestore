<template>
  <div>
    <div class="vue-tempalte container">
      <form>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h1 class="text-center headline">Sign Up Fire Store</h1>
            <div class="form-group text">
              <label>Name :</label>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter your name"
                v-model="name"
              />
            </div>

            <div class="form-group text">
              <label>Last Name :</label>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter Last Name"
                v-model="lastName"
              />
            </div>

            <div class="form-group email">
              <label>Email address :</label>
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Enter your email"
                v-model="email"
              />
            </div>

            <div class="form-group password">
              <label>Password :</label>
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>

            <button class="btn btn-dark btn-lg btn-block" @click="addData()">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    addData() {
      var data = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      db.collection("User")
        .doc()
        .set(data)
        .then(function()  {
          alert("Add To Cloud Firestore Succes");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
.headline {
  margin-top: 10%;
  margin-bottom: 25px;
}
</style>
