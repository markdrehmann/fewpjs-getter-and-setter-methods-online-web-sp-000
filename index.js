class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.radius * 2 * Math.PI
  }

  get area() {
    return this.radius ** 2 * Math.PI
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }

  set circumference(newCir) {
    this.radius =  newCir / 2 / Math.PI
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea/Math.PI)
  }
}