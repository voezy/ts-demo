"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Student = /*#__PURE__*/_createClass(function Student(firstName, middleInitial, lastName) {
  _classCallCheck(this, Student);

  _defineProperty(this, "fullname", void 0);

  this.fullname = firstName + " " + middleInitial + " " + lastName;
});

var greeter = function greeter(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
};

var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJTdHVkZW50IiwiZmlyc3ROYW1lIiwibWlkZGxlSW5pdGlhbCIsImxhc3ROYW1lIiwiZnVsbG5hbWUiLCJncmVldGVyIiwicGVyc29uIiwidXNlciIsImRvY3VtZW50IiwiYm9keSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPLDZCQUdKLGlCQUFtQkMsU0FBbkIsRUFBNkNDLGFBQTdDLEVBQTJFQyxRQUEzRSxFQUE2RjtBQUFBOztBQUFBOztBQUMzRixPQUFLQyxRQUFMLEdBQWdCSCxTQUFTLEdBQUcsR0FBWixHQUFrQkMsYUFBbEIsR0FBa0MsR0FBbEMsR0FBd0NDLFFBQXhEO0FBQ0QsQzs7QUFRSCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQW9CO0FBQ2xDLFNBQU8sWUFBWUEsTUFBTSxDQUFDTCxTQUFuQixHQUErQixHQUEvQixHQUFxQ0ssTUFBTSxDQUFDSCxRQUFuRDtBQUNELENBRkQ7O0FBSUEsSUFBSUksSUFBSSxHQUFHLElBQUlQLE9BQUosQ0FBWSxNQUFaLEVBQW9CLElBQXBCLEVBQTBCLE1BQTFCLENBQVg7QUFFQVEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsR0FBMEJMLE9BQU8sQ0FBQ0UsSUFBRCxDQUFqQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFN0dWRlbnQge1xuICBmdWxsbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZywgcHVibGljIG1pZGRsZUluaXRpYWw6IHN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZ1bGxuYW1lID0gZmlyc3ROYW1lICsgXCIgXCIgKyBtaWRkbGVJbml0aWFsICsgXCIgXCIgKyBsYXN0TmFtZTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUGVyc29uIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdyZWV0ZXIgPSAocGVyc29uOiBQZXJzb24pID0+IHtcbiAgcmV0dXJuIFwiSGVsbG8sIFwiICsgcGVyc29uLmZpcnN0TmFtZSArIFwiIFwiICsgcGVyc29uLmxhc3ROYW1lO1xufVxuXG5sZXQgdXNlciA9IG5ldyBTdHVkZW50KFwiSmFuZVwiLCBcIk0uXCIsIFwiVXNlclwiKTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBncmVldGVyKHVzZXIpO1xuIl19