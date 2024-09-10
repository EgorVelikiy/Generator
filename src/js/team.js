import Bowman from './bowman.js'
import Magician from './magician.js'

export default class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.members = new Set();
        this.start = -1
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

    [Symbol.iterator]() {
        return this
    }

    next() {
        let end = this.toArray().length - 1;
        const arr = this.toArray();
        if (this.start >= end) {
          this.start = -1;
          return {
            value: 'Перебор окончен',
            done: true,
          };
        }
        return {
          value: arr[++this.start],
          done: false,
        };
    }
}