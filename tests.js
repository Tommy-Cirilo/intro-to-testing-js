// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});


describe("isEven", function(){
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean value", function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return when passed the value of 10", function () {
        expect(isEven(10)).toBe(true);
    });
});



describe("sayHello", function() {
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });

    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });

    it("should return 'Hello, Jane'", function(){
        expect("Hello, Jane").toBe("Hello, Jane");
    });
    it("should return 'Hello, Alex'", function(){
        expect(sayHello ("Alex")).toBe("Hello, Alex");
    });
    it("should return 'Hello, Pat'", function () {
        expect (sayHello ("Pat")).toBe("Hello, Pat");
    });
    it('should not return as undefined', function () {
        expect(sayHello()).toBe("Boolean");
    });
    it("Hello, World should return with the boolean of true", function () {
        expect(sayHello(true)).toBe("Hello, World");
    });
});



describe("isFive", function () {
    it('isFive should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should always return a boolean value of true', function () {
        expect(isFive(true)).toBe(true);
    });
    it('should return true when the number 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });

});





