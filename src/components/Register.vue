<template>
    
    <form @submit.prevent="reggie">
        <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="fullName" placeholder="juan dela cruz" v-model="full_name">
        </div>
        <div class="form-group">
            <label for="eMail">Email</label>
            <input type="email" class="form-control" id="eMail" placeholder="juandelacruz@email.com" v-model="email">
        </div>
        <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" class="form-control" id="pass" placeholder="Input Password" v-model="password">
        </div>
        <div class="form-group">
            <label for="passConf">Confirm Password</label>
            <input type="password" class="form-control" id="passConf" placeholder="Confirm Password" v-model="password_confirmation">
        </div>
        <div class="sub">
            <button type="submit" class="btn btn-primary">Sign Up</button>
            <a href="/" class="btn btn-secondary">Log In</a>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            full_name: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        async reggie(){
            await axios.post('register', {
                email: this.email,
                full_name: this.full_name,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            this.$router.push('/login');
        }
    }
}
</script>



<style>
* {
  box-sizing: border-box;
}

p {
    padding: 0;
    margin: 0;
}

div {
    margin-bottom: 7px;
}

.form-group {
    margin-bottom: 10px;
}

.sub {
    margin-top: 10px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}

.sub .btn {
    width: 48%;
}

</style>