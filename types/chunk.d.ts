import type { loader as pbloader, Block } from "prismarine-block";
import type {IndexedData} from "minecraft-data"
import type { Vec3 } from "vec3";
import {Section} from "./section";


export type ChunkInitData = {Block: ReturnType<typeof pbloader>, mcData: IndexedData}
export default function loader(mcVersion: number): typeof Chunk;


// I have no better way to implement this currently. :XD:
export declare interface ChunkInterface {
    skyLightSent: boolean;
    sections: Section[];
    biome: Buffer;
    toJson(): string;
    initialize(iniFunc: any): void;
    getBlock(pos: Vec3): Block;
    setBlock(pos: Vec3, block: Block): void;
    getBiomeColor(pos: Vec3): {
        r: number;
        g: number;
        b: number;
    };
    setBiomeColor(pos: Vec3, r: number, g: number, b: number): void;
    getBlockStateId(pos: Vec3): Section;
    getBlockType(pos: Vec3): number;
    getBlockData(pos: Vec3): number;
    getBlockLight(pos: Vec3): number;
    getSkyLight(pos: Vec3): number;
    getBiome(pos: Vec3): number;
    setBlockStateId(pos: Vec3, stateId: number): Section;
    setBlockType(pos: Vec3, id: number): void;
    setBlockData(pos: Vec3, data: Buffer): void;
    setBlockLight(pos: Vec3, light: number): Section;
    setSkyLight(pos: Vec3, light: number): Section;
    setBiome(pos: Vec3, biome: number): void;
    dumpBiomes(): Array<number>;
    dumpLight(): Buffer;
    loadLight(data: Buffer, skyLightMask: number, blockLightMask: number, emptySkyLightMask?: number, emptyBlockLightMask?: number): void;
    loadLightParse(skyLight: Buffer[], blockLight: Buffer[], skyLightMask: number[][], blockLightMask: number[][], emptySkyLightMask: number[][], emptyBlockLightMask: number[][]): void;
    loadBiomes(newBiomesArray: Array<number>): void;
    dump(bitMap?: number, skyLightSent?: boolean): Buffer;
    load(data: Buffer, bitMap?: number, skyLightSent?: boolean, fullChunk?: boolean): void;
    getMask(): number;
}

//Repeat code. :thumbsup:

export declare class Chunk implements ChunkInterface {
    constructor(initData: ChunkInitData | null)
    static fromJson(j: any): Chunk;
    skyLightSent: boolean;
    sections: Section[];
    biome: Buffer;
    toJson(): string;
    initialize(iniFunc: any): void;
    getBlock(pos: Vec3): Block;
    setBlock(pos: Vec3, block: Block): void;
    getBiomeColor(pos: Vec3): {
        r: number;
        g: number;
        b: number;
    };
    setBiomeColor(pos: Vec3, r: number, g: number, b: number): void;
    getBlockStateId(pos: Vec3): Section;
    getBlockType(pos: Vec3): number;
    getBlockData(pos: Vec3): number;
    getBlockLight(pos: Vec3): number;
    getSkyLight(pos: Vec3): number;
    getBiome(pos: Vec3): number;
    setBlockStateId(pos: Vec3, stateId: number): Section;
    setBlockType(pos: Vec3, id: number): void;
    setBlockData(pos: Vec3, data: Buffer): void;
    setBlockLight(pos: Vec3, light: number): Section;
    setSkyLight(pos: Vec3, light: number): Section;
    setBiome(pos: Vec3, biome: number): void;
    dumpBiomes(): Array<number>;
    dumpLight(): Buffer;
    loadLight(data: Buffer, skyLightMask: number, blockLightMask: number, emptySkyLightMask?: number, emptyBlockLightMask?: number): void;
    loadLightParse(skyLight: Buffer[], blockLight: Buffer[], skyLightMask: number[][], blockLightMask: number[][], emptySkyLightMask: number[][], emptyBlockLightMask: number[][]): void;
    loadBiomes(newBiomesArray: Array<number>): void;
    dump(bitMap?: number, skyLightSent?: boolean): Buffer;
    load(data: Buffer, bitMap?: number, skyLightSent?: boolean, fullChunk?: boolean): void;
    getMask(): number;
}
