// BAD
type Game = {
  url: string;
  users: {
    firstUser: {
      movements: [];
    };
    secondUser: {
      movements: [];
    };
  };
};

// GOOD
type User = {
  movements: Movement[];
};

type Movement = {
  squarePosition: number;
  date: Date;
};

type Room = {
  url: string;
  firstUser: User;
  secondUser: User;
};
