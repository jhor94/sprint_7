export interface Ship {
    map(arg0: (ship: any) => { imgUrl: string; }): Ship;
    id?: string,
    name: string,
    model:string,
    manufacturer: string,
    cost_in_credits: string ,
    length: number,
    max_atmosphering_speed: number,
    crew: string,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: number,
    starship_class: string,
    pilots: string[],
    films: string[],
    created: Date,
    edited: Date,
    url: string,
    imgUrl?:string,
}

