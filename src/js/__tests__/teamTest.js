import Team from '../team'
import Magician from '../magician'
import Bowman from '../bowman'


test('add', () => {
	const char = new Bowman('Егор');
	const team = new Team('Дружба')
	team.add(char)
	expect(team.members.has(char)).toBe(true)
})

test('add_2memb', () => {
	const char = new Bowman('Егор');
	const team = new Team('Дружба')
	team.add(char)
	expect(() => team.add(char)).toThrow()
})

test('toArray', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Bowman('Иван');
	const team = new Team('Дружба');
	team.addAll(char1, char2, char2);
	expect(team.toArray()).toEqual([char1, char2])
})

test('addAll', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Bowman('Иван');
	const team = new Team('Дружба')
	team.addAll(char1, char2, char2)
	expect(team.toArray()).toEqual([char1, char2])
})

test('Выбор первого персонажа', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Magician('Егор');
	const team = new Team('Дружба')
	team.addAll(char1, char2)
	expect(team.next()).toEqual({
		value: {
		    name: 'Егор',
		    type: 'Bowman',
		    health: 100,
		    level: 1,
		    attack: 25,
		    defence: 25
	  	},
	  	done: false
	})
})

test('Выбор второго персонажа', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Magician('Егор');
	const team = new Team('Дружба')
	team.addAll(char1, char2)
	team.next()
	expect(team.next()).toEqual({
		value: {
		    name: 'Егор',
		    type: 'Magician',
		    health: 100,
		    level: 1,
		    attack: 10,
		    defence: 40
	  	},
	  	done: false
	})
})

test('Проверка выхода за индекс', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Magician('Егор');
	const team = new Team('Дружба')
	team.addAll(char1, char2)
	team.next()
	team.next()
	expect(team.next()).toEqual({
		value: 'Перебор окончен',
	  	done: true
	})
})