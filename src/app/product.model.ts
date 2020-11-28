class Product{

    private sku:string;
    private name:string;
    private imageUrl:string;
    private department: string[];
    private price:number;

    constructor(sku:string,name:string,imageUrl:string
        ,department:string[],price:number){
            this.sku = sku;
            this.name = name;
            this.imageUrl = imageUrl;
            this.department = department;
            this.price = price;
    }

    set setSku(sku:string){
        this.sku = sku;
    }

    get getSku():string{
        return this.sku;
    }

    set setName(name:string){
        this.name = name;
    }

    get getName():string{
        return this.name;
    }

    set setImageUrl(imageUrl:string){
        this.imageUrl = imageUrl;
    }

    get getImageUrl():string{
        return this.imageUrl;
    }

    set setDepartment(department:string[]){
        this.department = department;
    }

    get getDepartment():string[]{
        return this.department;
    }

    set setPrice(price:number){
        this.price = price;
    }

    get getPrice():number{
        return this.price;
    }
}

export {Product};