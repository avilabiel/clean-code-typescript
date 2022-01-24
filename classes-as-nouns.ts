// BAD
class CreateUser {
  create() {}
}

// GOOD
class User {
  create() {}

  update() {}

  delete() {}
}

// PS.: We might see exceptions, especially on DDD.
