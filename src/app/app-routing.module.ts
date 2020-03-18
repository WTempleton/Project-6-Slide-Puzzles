import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { ThreeByThreeComponent } from "./three-by-three/three-by-three.component";
import { FourByFourComponent } from "./four-by-four/four-by-four.component";

const routes: Routes = [
    { path: "main-menu", component: MainMenuComponent },
    { path: "three-by-three", component: ThreeByThreeComponent },
    { path: "four-by-four", component: FourByFourComponent },
    { path: "**", component: MainMenuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
