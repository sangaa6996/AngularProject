export class Recipe {
    public name: any;
    public description: any;
    public imagePath: any;
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}