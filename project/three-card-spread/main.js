import { canvas, context } from './experience.js'
import { click } from './click.js'

canvas.addEventListener("click", function() {
    click(event);
  });
