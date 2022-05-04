Vue.component("my-table", {

    props: {
            participants: {
                type: Array,
                required: true,
            },
            styles: {
                type: String,
                required: true,
            },
    },

    template:
        `<div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Organización</th>
                        <th>Llegada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(participant, i) in participants" :key="i">
                        <th v-for="(row, r) in participant" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>`

});

var app = new Vue({

    el: "#app",

    data: {
        one: {
            participants: [
                {name: "Juan", surname: "González", organisation: "CCIRR", arrival: new Date("2022/05/05").toLocaleDateString()},
                {name: "José", surname: "Dellepiane", organisation: "CICAE", arrival: new Date("2022/05/05").toLocaleDateString()},
                {name: "Rosana", surname: "Júarez", organisation: "FISFE", arrival: new Date("2022/05/04").toLocaleDateString()},
                {name: "Pedro", surname: "Dellasanta", organisation: "CCIRR", arrival: new Date("2022/05/05").toLocaleDateString()},
                {name: "Evangelina", surname: "Ramírez", organisation: "UIA", arrival: new Date("2022/05/04").toLocaleDateString()},,
            ],
            styles: "day-one",
        },
        two: {
            participants: [
                {name: "Mariano", surname: "Lufiego", organisation: "UIA", arrival: new Date("2022/05/05").toLocaleDateString()},
                {name: "Laura", surname: "Tapia", organisation: "FISFE", arrival: new Date("2022/05/05").toLocaleDateString()},
                {name: "Santiago", surname: "Milanese", organisation: "CICAE", arrival: new Date("2022/05/06").toLocaleDateString()},
                {name: "Iván", surname: "López", organisation: "CCIRR", arrival: new Date("2022/05/06").toLocaleDateString()},
                {name: "Mauro", surname: "Martínez", organisation: "CCIRR", arrival: new Date("2022/05/06").toLocaleDateString()},
            ],
            styles: "day-two",
        },
        three: {
            participants: [
                {name: "Mariana", surname: "Lombardo", organisation: "CICAE", arrival: new Date("2022/05/07").toLocaleDateString()},
                {name: "Guillermina", surname: "Fernández", organisation: "CICAE", arrival: new Date("2022/05/07").toLocaleDateString()},
                {name: "Carolina", surname: "Allasino", organisation: "UIA", arrival: new Date("2022/05/06").toLocaleDateString()},
                {name: "Diego", surname: "Pérez", organisation: "FISFE", arrival: new Date("2022/05/06").toLocaleDateString()},
                {name: "Adolfo", surname: "Daniele", organisation: "CCIRR", arrival: new Date("2022/05/07").toLocaleDateString()},
            ],
            styles: "day-three",
        },
    },

    // ¿Cómo hago que esto sea dinámico?
    methods: {
        styling() {
            return this.one.styles
        }
    }
});