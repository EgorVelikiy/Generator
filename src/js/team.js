export default class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.members = new Set();
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
}