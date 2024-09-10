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


test('Проверка генератора (первое значение)', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Magician('Егор');
	const team = new Team("Привет");
	team.addAll(char1, char2);

	const members = team[Symbol.iterator]();

	expect(members.next()).toEqual( {"done": false, "value": {"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "Егор", "type": "Bowman"}} )
})

test('Проверка генератора (второе значение)', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Magician('Егор');
	const team = new Team("Привет");
	team.addAll(char1, char2);

	const members = team[Symbol.iterator]();
	members.next()

	expect(members.next()).toEqual( {"done": false, "value": {"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "Егор", "type": "Magician"}} )
})

test('Проверка генератора (заключительно значение)', () => {
	const char1 = new Bowman('Егор');
	const char2 = new Magician('Егор');
	const team = new Team("Привет");
	team.addAll(char1, char2);

	const members = team[Symbol.iterator]();
	members.next()
	members.next()

	expect(members.next()).toEqual( {"done": true, "value": undefined} )
})