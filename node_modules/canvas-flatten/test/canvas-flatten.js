const Flatten = require ('../src/canvas-flatten');

const chai = require('chai');  
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('CanvasFlatten', function() {
    
    describe('flatten [ 0, 0, 0, 255 ] on [ 255, 255, 255 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 0, 0, 0, 255 ])
        };

        let result = Flatten.flatten(image, [ 255, 255, 255 ]);
        
        it('should be [ 0, 0, 0, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 0, 0, 0, 255 ]), result.data);
        });
    });

    describe('flatten [ 0, 0, 0, 80 ] on [ 255, 255, 255 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 0, 0, 0, 80 ])
        };

        let result = Flatten.flatten(image, [ 255, 255, 255 ]);
        
        it('should be [ 175, 175, 175, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 175, 175, 175, 255 ]), result.data);
        });
    });
    
    describe('flatten [ 0, 0, 0, 0 ] on [ 255, 255, 255 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 0, 0, 0, 0 ])
        };

        let result = Flatten.flatten(image, [ 255, 255, 255 ]);
        
        it('should be [ 255, 255, 255, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 255, 255, 255, 255 ]), result.data);
        });
    });

    describe('flatten [ 255, 255, 255, 255 ] on [ 0, 0, 0 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 255, 255, 255, 255 ])
        };

        let result = Flatten.flatten(image, [ 0, 0, 0 ]);
        
        it('should be [ 255, 255, 255, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 255, 255, 255, 255 ]), result.data);
        });
    });

    describe('flatten [ 255, 255, 255, 0 ] on [ 0, 0, 0 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 255, 255, 255, 0 ])
        };

        let result = Flatten.flatten(image, [ 0, 0, 0 ]);
        
        it('should be [ 0, 0, 0, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 0, 0, 0, 255 ]), result.data);
        });
    });

    describe('flatten [ 255, 255, 255, 80 ] on [ 0, 0, 0 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 255, 255, 255, 80 ])
        };

        let result = Flatten.flatten(image, [ 0, 0, 0 ]);
        
        it('should be [ 80, 80, 80, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 80, 80, 80, 255 ]), result.data);
        });
    });

    describe('flatten [ 0, 0, 0, 80 ] on [ 0, 0, 0 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 0, 0, 0, 80 ])
        };

        let result = Flatten.flatten(image, [ 0, 0, 0 ]);
        
        it('should be [ 0, 0, 0, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 0, 0, 0, 255 ]), result.data);
        });
    });

    describe('flatten [ 255, 0, 0, 128 ] on [ 0, 255, 0 ] ', function () {
        let image = {
            width: 1,
            height: 1,
            data: new Uint8ClampedArray([ 255, 0, 0, 128 ])
        };

        let result = Flatten.flatten(image, [ 0, 255, 0 ]);
        
        it('should be [ 128, 127, 0, 255 ]', function () {
            assert.deepEqual(new Uint8ClampedArray([ 128, 127, 0, 255 ]), result.data);
        });
    });
});
