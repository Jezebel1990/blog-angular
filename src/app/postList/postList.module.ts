import { NgModule } from "@angular/core";
import {postListReducer} from './reducers/post-list.reducer';
import { StoreModule } from '@ngrx/store';
import { PostListSevice } from "./services/post-list.service";
import { EffectsModule } from '@ngrx/effects';
import { PostListEffects } from "./effects/post-list.effects";




@NgModule ({
    imports: [
    StoreModule.forFeature('data', postListReducer ),
    EffectsModule.forFeature([PostListEffects])

    ],
    providers: [PostListSevice],
    declarations: [
  
    ]
})
export class PostListModule {}