// app/console-handler.js
import { EventEmitter } from './utils/event-emitter.js';

EventEmitter.on('itensTotalizados', console.log);