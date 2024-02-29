<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h2>Lista de Pessoas</h2>
                <button class="btn btn-primary btn-create" @click="goToCreatePerson">Nova Pessoa</button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Idade</th>
                            <th>Profissao</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="person in persons" :key="person.id">
                            <td>{{ person.name }}</td>
                            <td>{{ person.surname }}</td>
                            <td>{{ person.age }}</td>
                            <td>{{ person.profession }}</td>
                            <td>
                                <button class="btn btn-danger" @click="deletePerson(person.id)">Deletar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            persons: []
        }
    },
    mounted() {
        this.getAll();
    },
    methods: {
        async getAll(){
            try {
                const response = await axios.get('https://localhost:7277/person');
                this.persons = response.data
            }
            catch (error) {
                console.log(error)
            }
        },
        async deletePerson(id){
            try {
                await axios.delete(`https://localhost:7277/person/${id}`)
                alert('Pessoa deletada com sucesso')
                this.getAll()
            }
            catch (error){
                alert('Erro ao excluir.')
                console.log(error)
            }
        },
        goToCreatePerson() {
            this.$router.push({name: 'CreatePerson'})
        }
    }
}

</script>