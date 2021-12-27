"use strict";

require("core-js/modules/es.array.includes.js");

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
  console.log([1, 2].includes(1));
  return "Hello, " + person.firstName + " " + person.lastName;
};

var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJTdHVkZW50IiwiZmlyc3ROYW1lIiwibWlkZGxlSW5pdGlhbCIsImxhc3ROYW1lIiwiZnVsbG5hbWUiLCJncmVldGVyIiwicGVyc29uIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwidXNlciIsImRvY3VtZW50IiwiYm9keSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE8sNkJBR0osaUJBQW1CQyxTQUFuQixFQUE2Q0MsYUFBN0MsRUFBMkVDLFFBQTNFLEVBQTZGO0FBQUE7O0FBQUE7O0FBQzNGLE9BQUtDLFFBQUwsR0FBZ0JILFNBQVMsR0FBRyxHQUFaLEdBQWtCQyxhQUFsQixHQUFrQyxHQUFsQyxHQUF3Q0MsUUFBeEQ7QUFDRCxDOztBQVFILElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBb0I7QUFDbENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBTUMsUUFBTixDQUFlLENBQWYsQ0FBWjtBQUNBLFNBQU8sWUFBWUgsTUFBTSxDQUFDTCxTQUFuQixHQUErQixHQUEvQixHQUFxQ0ssTUFBTSxDQUFDSCxRQUFuRDtBQUNELENBSEQ7O0FBS0EsSUFBSU8sSUFBSSxHQUFHLElBQUlWLE9BQUosQ0FBWSxNQUFaLEVBQW9CLElBQXBCLEVBQTBCLE1BQTFCLENBQVg7QUFFQVcsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsR0FBMEJSLE9BQU8sQ0FBQ0ssSUFBRCxDQUFqQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFN0dWRlbnQge1xuICBmdWxsbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZywgcHVibGljIG1pZGRsZUluaXRpYWw6IHN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZ1bGxuYW1lID0gZmlyc3ROYW1lICsgXCIgXCIgKyBtaWRkbGVJbml0aWFsICsgXCIgXCIgKyBsYXN0TmFtZTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUGVyc29uIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdyZWV0ZXIgPSAocGVyc29uOiBQZXJzb24pID0+IHtcbiAgY29uc29sZS5sb2coWzEsMl0uaW5jbHVkZXMoMSkpO1xuICByZXR1cm4gXCJIZWxsbywgXCIgKyBwZXJzb24uZmlyc3ROYW1lICsgXCIgXCIgKyBwZXJzb24ubGFzdE5hbWU7XG59XG5cbmxldCB1c2VyID0gbmV3IFN0dWRlbnQoXCJKYW5lXCIsIFwiTS5cIiwgXCJVc2VyXCIpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGdyZWV0ZXIodXNlcik7XG4iXX0=