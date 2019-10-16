export class Product {
    id: number =  0;
    private p_name?: string =  "";
    price: number =  0;
    description?: string =  "";
    itemCode: string =  "";
    manufacturer: string = "";

    get name(): string {
        return this.p_name;
    }
    set name(name: string) {
        if (typeof name === 'string') {
            this.p_name = name;
        }
    }
}
