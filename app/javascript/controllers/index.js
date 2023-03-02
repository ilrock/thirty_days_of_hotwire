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

import TurboStreamButton from "./turbo_stream_button_controller"
application.register("turbo-stream-button", TurboStreamButton)

import DynamicFormField from "./dynamic_form_field_controller"
application.register("dynamic-form-field", DynamicFormField)

import Visibility from "./visibility_controller"
application.register("visibility", Visibility)
