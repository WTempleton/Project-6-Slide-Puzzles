import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "app-three-by-three",
    templateUrl: "./three-by-three.component.html",
    styleUrls: ["./three-by-three.component.css"]
})
export class ThreeByThreeComponent implements OnInit {
    tilesSet: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    tiles: number[] = _.sampleSize(this.tilesSet, 9);

    zeroTile = "grid-zero";

    newGame() {
        this.tiles = _.sampleSize(this.tilesSet, 9);
    }

    isZero(value) {
        if (value === 0) {
            return false;
        }
        return true;
    }

    canSwap(tile) {
        const tileIndex = this.tiles.indexOf(tile);
        const zeroIndex = this.tiles.indexOf(0);
        if (tileIndex === zeroIndex + 3 || tileIndex === zeroIndex - 3) {
            return true;
        }
        if (tileIndex === zeroIndex + 1 && tileIndex !== 3 && tileIndex !== 6) {
            return true;
        }
        if (tileIndex === zeroIndex - 1 && tileIndex !== 2 && tileIndex !== 5) {
            return true;
        }
        return false;
    }

    swap(tile) {
        if (this.canSwap(tile) === true) {
            const tileIndex = this.tiles.indexOf(tile);
            const zeroIndex = this.tiles.indexOf(0);
            this.tiles[tileIndex] = 0;
            this.tiles[zeroIndex] = tile;
        }
    }

    arraysEqual(a, b) {
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    gameOn() {
        if (this.arraysEqual(this.tiles, this.tilesSet)) {
            return false;
        }
        return true;
    }

    constructor() {}

    ngOnInit(): void {}
}
