import { Position, Size} from './component.js'

export class Card {
    constructor (type, x, y, width, height) {
        this.type = type;
        this.size = new Size(width, height);
        this.position = new Position(x, y);
    }
}
