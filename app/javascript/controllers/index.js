// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AutosubmitController from "./autosubmit_controller"
application.register("autosubmit", AutosubmitController)

import CommandPaletteController from "./command_palette_controller"
application.register("command-palette", CommandPaletteController)

import FlashController from "./flash_controller"
application.register("flash", FlashController)

import FormResetController from "./form_reset_controller"
application.register("form-reset", FormResetController)

import StreamAnimationsController from "./stream_animations_controller"
application.register("stream-animations", StreamAnimationsController)

import StreamsController from "./streams_controller"
application.register("streams", StreamsController)
