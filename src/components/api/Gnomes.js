import API from '.';

export default class Gnomes {

    constructor({ id, name, thumbnail, age, weight, height, hair_color, professions, friends }) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.hair_color = hair_color;
        this.professions = professions;
        this.friends = friends;
    }

    static async getAll() {
        const api = await API();
        const { data } = await api.get('');
        return data.Brastlewark.map((d) => new Gnomes(d));
    }
}
