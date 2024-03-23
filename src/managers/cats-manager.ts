import Cat from '../models/cat.models.ts';
import cats from '../data/cats.json'

export default class CatsManager {
    // todo: tester que tous les ids sont uniques
    static getAllCats() {
        let allCats: Cat[] = JSON.parse(JSON.stringify(cats));

        for(let i = 0; i < allCats.length; i++) {
            allCats[i].vote = 0;
        }

        return allCats;
    }
}