import Character from '../character'
import Bowman from '../bowman'

test('Создание Character', () => {
	const char = new Character('Егор', 'Undead');

	const obj = {
		name: 'Егор',
		type: 'Undead',
		health: 100,
		level: 1,
		attack: undefined,
		defence: undefined,
	};

	expect(char).toEqual(obj);
});


test('Проверка имени', () => {
	expect(() => {new Character('Егорегорегорегорегоергфцвафвфц', 'Undead')}).toThrow();
});

test('Проверка типа', () => {
	expect(() => {new Character('Егор', 'Student')}).toThrow();
});


test('Получение нового уровня персонажа hp > 0', () => {
	const char = new Bowman('Егор');
	char.levelUp();

	const obj = {
		name: 'Егор',
		type: 'Bowman',
		health: 100,
		level: 2,
		attack: 30,
		defence: 30,
	}

	expect(char).toEqual(obj);
});

test('Получение нового уровня персонажа hp < 0', () => {
	const char = new Bowman('Егор');
	char.health = 0;

	expect(() => char.levelUp()).toThrow();
});


test('Получение урона персонажем hp > 0', () => {
	const char = new Bowman('Егор');
	char.damage(40)


	expect(char.health).toBe(70);
});

test('Получение урона персонажем hp < 0', () => {
	const char = new Bowman('Егор');
	char.health = 0

	expect(() => char.damage(40)).toThrow();
});


test('Проверка сортировки', () => {
	const obj = new Bowman('Егор');
	const sorted_keys = ["attack", "level"];

	const result = [
		{ key: 'attack', value: 25 },
		{ key: 'level', value: 1 },
		{ key: 'defence', value: 25 },
		{ key: 'health', value: 100 },
		{ key: 'name', value: 'Егор' },
		{ key: 'type', value: 'Bowman'}
	]
	
	expect(obj.sorting(sorted_keys)).toEqual(result);
});


test('Проверка несуществующего ключа', () => {
	const obj = new Bowman('Егор');
	const sorted_keys = ["class", "level"];

	expect(() => obj.sorting(sorted_keys)).toThrow()
});
