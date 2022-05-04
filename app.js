Vue.component("event-component", {
    props: {
            tittle: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
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
        `<div :class="styles">
            <h3>{{tittle}}</h3>
            <p>{{description}}</p>
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
            tittle: "Día 1",
            description: "Visita a empresas de la ciudad",
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
            tittle: "Día 2",
            description: "Encuentro de jóvenes empresarios",
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
            tittle: "Día 3",
            description: "Charla debate sobre actualidad industrial",
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
});