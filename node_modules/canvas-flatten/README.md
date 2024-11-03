# canvas-flatten

Flatten canvas image data with transparency on a solid background

## Usage

First, install the package using npm:

    npm install canvas-flatten --save

Then, require the package and use it like so:

    let Flatten = require('canvas-flatten');

    // Assume we have an existing canvas element with a 2D context
    // Retrieve the image data of the canvas
    let image = context.getImageData(0, 0, canvas.width, canvas.height);

    // Flatten the transparency on a white background
    image = Flatten.flatten(image, [ 0xff, 0xff, 0xff ]);

    // Place the image data back on the canvas
    context.putImageData(image, 0, 0);

## License

MIT