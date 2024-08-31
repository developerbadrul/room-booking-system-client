export interface IRoom {
    _id: string;
    image?: string;
    name: string;
    roomNo: number;
    floorNo: number;
    capacity: number;
    pricePerSlot: number;
    amenities: string[];
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    rating?: number;
}
