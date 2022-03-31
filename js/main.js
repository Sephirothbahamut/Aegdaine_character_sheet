import { database  as database  } from "./database.js";
import { Character as Character } from "./character.js";
import { setup as setup, init as init } from "./ui.js";

setup();
window.character = new Character(window.data);
init();

document.getElementById('start').click();