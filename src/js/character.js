export default class Character {
	constructor (name, type) {
		if (name.length < 2 || name.length > 10) {
			throw new Error('Некорректное имя')
		}

		const classes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

		if (!classes.includes(type)) {
			throw new Error('Некорректный тип')
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}

	levelUp() {
		if (this.health > 0) {
			this.level += 1;
			this.attack *= 1.2;
			this.defence *= 1.2;
			this.health = 100
		} else {
			throw new Error('нельзя повысить левел умершего')
		}
	}

	damage(points) {
		if (this.health !== 0) {
			this.health -= points * (1 - (this.defence / 100))
		} else {
			throw new Error('Персонаж уже мертв')
		}
	}


	sorting(sorted_keys) {
		const result = []

		for (let key of Object.keys(this)) {
			result.push({key: key, value: this[key]})
		}
		result.sort((a, b) => a.key > b.key ? 1 : -1)

		for (let i = sorted_keys.length - 1; i > -1; i--) {
			let ind = result.findIndex(item => item.key === sorted_keys[i])
			if (!this[sorted_keys[i]]) {
				throw new Error('Несуществующий ключ')
			}
			result.splice(ind, 1)
			result.unshift({key: sorted_keys[i], value: this[sorted_keys[i]]})

		}
		
		return result
	}
}
