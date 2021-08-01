<template>
    
    <form @submit.prevent="carlog">
        <div class="form-group">
            <label for="eMail">Email</label>
            <input type="text" class="form-control" id="eMail" v-model="email" placeholder="juandelacruz@email.com">
        </div>
        <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" class="form-control" id="pass" v-model="password" placeholder="Input Password">
        </div>
        <div class="sub">
            <button type="submit" class="btn btn-primary">Log In</button>
            <a href="/" class="btn btn-secondary">Go Back</a>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async carlog() {
            const response = await axios.post('login', {
                username: this.email,
                password: this.password
            });
            localStorage.setItem('token', response.data.token);
            this.$router.push('/dashboard');
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