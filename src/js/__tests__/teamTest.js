import Team from '../team'
import Character from '../character'
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