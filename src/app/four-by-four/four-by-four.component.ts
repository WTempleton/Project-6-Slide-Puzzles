import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "app-four-by-four",
    templateUrl: "./four-by-four.component.html",
    styleUrls: ["./four-by-four.component.css"]
})
export class FourByFourComponent implements OnInit {
    tilesSet: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    tiles: number[] = _.sampleSize(this.tilesSet, 16);

    zeroTile = "grid-zero";

    newGame() {
        this.tiles = _.sampleSize(this.tilesSet, 16);
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
        if (tileIndex === zeroIndex + 4 || tileIndex === zeroIndex - 4) {
            return true;
        }
        if (
            tileIndex === zeroIndex + 1 &&
            tileIndex !== 4 &&
            tileIndex !== 8 &&
            tileIndex !== 12
        ) {
            return true;
        }
        if (
            tileIndex === zeroIndex - 1 &&
            tileIndex !== 3 &&
            tileIndex !== 7 &&
            tileIndex !== 11
        ) {
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
