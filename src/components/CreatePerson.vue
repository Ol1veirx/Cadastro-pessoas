<template>
    <div class="container mt-5">
        <form @submit.prevent="handleSubmit" class="border p-4 rounder shadow-sm">
            <div class="mb-3">
                <label for="name" class="form-label">Nome:</label>
                <input class="form-control" type="text" id="name" v-model="person.name" required />
            </div>
            <div class="mb-3">
                <label for="surname" class="form-label">Sobrenome:</label>
                <input class="form-control" type="text" id="surname" v-model="person.surname" required />
            </div>
            <div>
                <label for="age" class="form-label">Idade:</label>
                <input class="form-control" type="number" id="age" v-model="person.age" required />
            </div>
            <div class="mb-3">
                <label for="profession" class="form-label">Profissão:</label>
                <input class="form-control custom-width" type="text" id="profession" v-model="person.profession" required />
            </div>
            <div>
                <button class="btn btn-primary" type="submit">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            person: {
                name: '',
                surname: '',
                age: null,
                profession: '',
            }
        }
        
    },
    methods: {
        async handleSubmit() {
            try{
                const response = await axios.post('https://localhost:7277/person', this.person);

                this.person.name = '';
                this.person.surname = '';
                this.person.age = 0;
                this.person.profession = '';

                alert("Pessoa cadastrada com sucesso.", response.data)
                this.$router.push({name: 'ListPersons'})
            }
            catch (error) {
                alert("Erro ao cadastrar.")
                console.log(error)
            }
        }
    }
}

</script>

<style>

label {
    font-weight: bold;
}

</style>