// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject, named, IHook } from "@robotlegsjs/core";

@injectable()
export class CallbackHook implements IHook {
    private _callback: Function;

    constructor(
        @inject("Function")
        @named("hookCallback")
        callback: Function
    ) {
        this._callback = callback;
    }

    public hook(): void {
        if (this._callback) {
            this._callback();
        }
    }
}
