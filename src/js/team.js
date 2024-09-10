import Bowman from './bowman.js'
import Magician from './magician.js'

export default class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.members = new Set();
        this.start = 0
    };
    
    add(char) {
        if (this.members.has(char)) {
            throw new Error('Такой персонаж уже есть в команде');
        } else {
            this.members.add(char);
        }
    };

    addAll(...chars) {
        chars.forEach((char) => {
            this.members.add(char);
        })
    }

    toArray() {
        return [...this.members];
    };

    *[Symbol.iterator]() {
        const end = this.members.size;
        const arr = this.toArray();

        for (let i = this.start; i < end; i++) {
          yield arr[i];
        }
    }
}